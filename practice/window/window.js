/*
   window 
   1.window is the main conatiner,or we can say the global object and any operations realted to entire browser
   window can be a part of window object.
   2.all the members like objects,methods or properties.if they are the part of window object the we donot refer the window object.
   3.window has methods,properties and object.ex setTimeout()or setinterval are()are the methos,where as doument is the object of the window and 
   it also ha a screen object
   
   Document
   1.wheras the dom is the child of window object
   2.where in the dom we need to refer the document,if we want to use the doument object,methods or properties
   3.doc..is just the object of the global object that window which deals with the doumentin html elemetns themeslves

                                           window
                                            |
                                            |
                         ----------------------------------------
                         |                  |                    |
                        DOM                BOM                 JAVASCRIPT
                        ...               navigator             object
                        HTML                 screen                array
                         |                 loctions              function
                     BODY   HEAD                  frames                 ..
                       |                 history
                     a   p              XMLHTTPREQUEST

*/
/**
 * window object:
 * the window object represnts the global wndow in a browser.both the bom and dom are part of the window object
 * 
 * 
 * bom:
 * the bom represents the browser as an object and provides methoda and properties for interacting with itself(not directly related to the content of web page).
 * ex:bom features inculde window.navigator for  browser infromation,window.loctaion for url manipulation and window for displayinng alerts
 * 
 * 
 * dom:dom repersent the structured docuement as a tree of objects,where each object corresponds to a part  of doument (such as elements,attrbutes and text).
 * 
 * the dom is primarily cocerned with the contnet of the web page allows js to inteact with and mainpulate the html elments
 * 
 * so while dom is focused on the content of the page,the bom is focused on the browser enviorment. 
 */


