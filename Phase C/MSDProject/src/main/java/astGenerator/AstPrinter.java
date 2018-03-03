package astGenerator;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.RuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
/**
 * 
 * A printer class that may be used to print the AST 
 *
 */
public class AstPrinter {

    private boolean ignoringWrappers = true;
/**
 * 
 * @param ignoringWrappers
 */
    public void setIgnoringWrappers(boolean ignoringWrappers) {
        this.ignoringWrappers = ignoringWrappers;
    }
/**
 * 
 * @param ctx
 * @throws IOException 
 */
    public void print(RuleContext ctx) throws IOException {
        explore(ctx, 0);
    }
/**
 * 
 * @param ctx
 * @param indentation
 * @throws IOException 
 */
    private void explore(RuleContext ctx, int indentation) throws IOException {
    	BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt",true));
       
         
        
        boolean toBeIgnored = ignoringWrappers
                && ctx.getChildCount() == 1
                && ctx.getChild(0) instanceof ParserRuleContext;
        if (!toBeIgnored) {
            String ruleName = Python3Parser.ruleNames[ctx.getRuleIndex()];
            for (int i = 0; i < indentation; i++) {
            	 writer.write("  ");
                System.out.print("  ");
            }
            writer.write(ruleName);
            writer.write("\n");
            System.out.println(ruleName);
            writer.close();
        }
        for (int i=0;i<ctx.getChildCount();i++) {
            ParseTree element = ctx.getChild(i);
            if (element instanceof RuleContext) {
                explore((RuleContext)element, indentation + (toBeIgnored ? 0 : 1));
            }
        }
    }

}