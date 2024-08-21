//how js will work

/**
 * 1.parsing phase
 * a.lexixal anlysis:lexical analyzer also known as a lexer,is the first step in the process of compiling a js program. it breaks the program
 * breaks the progrsm down into tokens,which are the basic building blocks of the language
 * 
 * b.syntax analysis
 * takes  the stream of tokens from lexixal anysis and checks them for correct synatx.if the synatx is correct,syntax anysis
 * generates a tree-like structure called parse tree or abstract syntax treee.ast reoresent hierarchical structure of the program
 * 
 * 
 * 2.compilation(jit compilation)
 * after the ast created the js emgine typically goes through a compilation phase.
 * modern engines,like vs in chrome,spidermonkey in firfox this compiltion often involves a combination of 
 *  approchres
 * 
 * parse and complie :the engine parses the code and complies it into intermediate form such as byecode or machine code
 * 
 * just-in-time compliation:some engines use jit complation where the intermediatee code complied just before excution
 * 
 * 3.excution
 * once code is complid,the js engine executes it.
 *  
 */
console.log(myVar);
greet();

var myVar=10;
function greet(){
    console.log("welcome,if you are reading this");

}
