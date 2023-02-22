;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) { // AMD
        define(["./blockly_compressed.js"], factory);
    } else if (typeof exports === 'object') { // Node.js
        module.exports = factory(require("./blockly_compressed.js"));
    } else { // Browser
        var factoryExports = factory(root.Blockly);
        root.Blockly.Python = factoryExports.pythonGenerator;
        root.Blockly.Python.__namespace__ = factoryExports.__namespace__;
    }
}(this, function (__parent__) {
    var $ = __parent__.__namespace__;
    var module$exports$Blockly$Python = {},
        module$contents$Blockly$Python_stringUtils = $.module$build$src$core$utils$string,
        module$contents$Blockly$Python_Variables = $.module$build$src$core$variables,
        module$contents$Blockly$Python_Generator = $.Generator$$module$build$src$core$generator,
        module$contents$Blockly$Python_inputTypes = $.module$build$src$core$input_types.inputTypes,
        module$contents$Blockly$Python_Names = $.module$build$src$core$names.Names,
        module$contents$Blockly$Python_NameType = $.NameType$$module$build$src$core$names;
    module$exports$Blockly$Python.pythonGenerator = new $.Generator$$module$build$src$core$generator("Python");
    module$exports$Blockly$Python.pythonGenerator.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip");
    module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC = 0;
    module$exports$Blockly$Python.pythonGenerator.ORDER_COLLECTION = 1;
    module$exports$Blockly$Python.pythonGenerator.ORDER_STRING_CONVERSION = 1;
    module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER = 2.1;
    module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL = 2.2;
    module$exports$Blockly$Python.pythonGenerator.ORDER_EXPONENTIATION = 3;
    module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN = 4;
    module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_NOT = 4;
    module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE = 5;
    module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE = 6;
    module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_SHIFT = 7;
    module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_AND = 8;
    module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_XOR = 9;
    module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_OR = 10;
    module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL = 11;
    module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT = 12;
    module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND = 13;
    module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR = 14;
    module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL = 15;
    module$exports$Blockly$Python.pythonGenerator.ORDER_LAMBDA = 16;
    module$exports$Blockly$Python.pythonGenerator.ORDER_NONE = 99;
    module$exports$Blockly$Python.pythonGenerator.ORDER_OVERRIDES = [
        [module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL, module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
        [module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL],
        [module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER, module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
        [module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER,
            module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL
        ],
        [module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT, module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT],
        [module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND, module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND],
        [module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR, module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR]
    ];
    module$exports$Blockly$Python.pythonGenerator.isInitialized = !1;
    module$exports$Blockly$Python.pythonGenerator.init = function (a) {
        Object.getPrototypeOf(this).init.call(this);
        this.PASS = this.INDENT + "pass\n";
        this.nameDB_ ? this.nameDB_.reset() : this.nameDB_ = new $.module$build$src$core$names.Names(this.RESERVED_WORDS_);
        this.nameDB_.setVariableMap(a.getVariableMap());
        this.nameDB_.populateVariables(a);
        this.nameDB_.populateProcedures(a);
        const b = [];
        var c = $.module$build$src$core$variables.allDeveloperVariables(a);
        for (let d = 0; d < c.length; d++) b.push(this.nameDB_.getName(c[d], $.module$build$src$core$names.Names.DEVELOPER_VARIABLE_TYPE) +
            " = None");
        a = $.module$build$src$core$variables.allUsedVarModels(a);
        for (c = 0; c < a.length; c++) b.push(this.nameDB_.getName(a[c].getId(), $.NameType$$module$build$src$core$names.VARIABLE) + " = None");
        this.definitions_.variables = b.join("\n");
        this.isInitialized = !0
    };
    module$exports$Blockly$Python.pythonGenerator.finish = function (a) {
        const b = [],
            c = [];
        for (let d in this.definitions_) {
            const e = this.definitions_[d];
            e.match(/^(from\s+\S+\s+)?import\s+\S+/) ? b.push(e) : c.push(e)
        }
        a = Object.getPrototypeOf(this).finish.call(this, a);
        this.isInitialized = !1;
        this.nameDB_.reset();
        return (b.join("\n") + "\n\n" + c.join("\n\n")).replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a
    };
    module$exports$Blockly$Python.pythonGenerator.scrubNakedValue = function (a) {
        return a + "\n"
    };
    module$exports$Blockly$Python.pythonGenerator.quote_ = function (a) {
        a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n");
        let b = "'"; - 1 !== a.indexOf("'") && (-1 === a.indexOf('"') ? b = '"' : a = a.replace(/'/g, "\\'"));
        return b + a + b
    };
    module$exports$Blockly$Python.pythonGenerator.multiline_quote_ = function (a) {
        return a.split(/\n/g).map(this.quote_).join(" + '\\n' + \n")
    };
    module$exports$Blockly$Python.pythonGenerator.scrub_ = function (a, b, c) {
        let d = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
            var e = a.getCommentText();
            e && (e = $.module$build$src$core$utils$string.wrap(e, this.COMMENT_WRAP - 3), d += this.prefixLines(e + "\n", "# "));
            for (let f = 0; f < a.inputList.length; f++) a.inputList[f].type === $.module$build$src$core$input_types.inputTypes.VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = this.allNestedComments(e)) && (d += this.prefixLines(e, "# "))
        }
        a = a.nextConnection &&
            a.nextConnection.targetBlock();
        c = c ? "" : this.blockToCode(a);
        return d + b + c
    };
    module$exports$Blockly$Python.pythonGenerator.getAdjustedInt = function (a, b, c, d) {
        c = c || 0;
        a.workspace.options.oneBasedIndex && c--;
        const e = a.workspace.options.oneBasedIndex ? "1" : "0";
        a = this.valueToCode(a, b, c ? this.ORDER_ADDITIVE : this.ORDER_NONE) || e;
        $.module$build$src$core$utils$string.isNumber(a) ? (a = parseInt(a, 10) + c, d && (a = -a)) : (a = 0 < c ? "int(" + a + " + " + c + ")" : 0 > c ? "int(" + a + " - " + -c + ")" : "int(" + a + ")", d && (a = "-" + a));
        return a
    };
    var module$exports$Blockly$Python$variables = {},
        module$contents$Blockly$Python$variables_NameType = $.NameType$$module$build$src$core$names;
    module$exports$Blockly$Python.pythonGenerator.variables_get = function (a) {
        return [module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
    };
    module$exports$Blockly$Python.pythonGenerator.variables_set = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        return module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE) + " = " + b + "\n"
    };
    var module$exports$Blockly$Python$variablesDynamic = {};
    module$exports$Blockly$Python.pythonGenerator.variables_get_dynamic = module$exports$Blockly$Python.pythonGenerator.variables_get;
    module$exports$Blockly$Python.pythonGenerator.variables_set_dynamic = module$exports$Blockly$Python.pythonGenerator.variables_set;
    var module$exports$Blockly$Python$texts = {},
        module$contents$Blockly$Python$texts_stringUtils = $.module$build$src$core$utils$string,
        module$contents$Blockly$Python$texts_NameType = $.NameType$$module$build$src$core$names;
    module$exports$Blockly$Python.pythonGenerator.text = function (a) {
        return [module$exports$Blockly$Python.pythonGenerator.quote_(a.getFieldValue("TEXT")), module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
    };
    module$exports$Blockly$Python.pythonGenerator.text_multiline = function (a) {
        a = module$exports$Blockly$Python.pythonGenerator.multiline_quote_(a.getFieldValue("TEXT"));
        const b = -1 !== a.indexOf("+") ? module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE : module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC;
        return [a, b]
    };
    var module$contents$Blockly$Python$texts_strRegExp = /^\s*'([^']|\\')*'\s*$/,
        module$contents$Blockly$Python$texts_forceString = function (a) {
            return module$contents$Blockly$Python$texts_strRegExp.test(a) ? [a, module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC] : ["str(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
        };
    module$exports$Blockly$Python.pythonGenerator.text_join = function (a) {
        switch (a.itemCount_) {
        case 0:
            return ["''", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
        case 1:
            return a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD0", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''", module$contents$Blockly$Python$texts_forceString(a);
        case 2:
            var b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD0", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) ||
                "''";
            a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD1", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
            return [module$contents$Blockly$Python$texts_forceString(b)[0] + " + " + module$contents$Blockly$Python$texts_forceString(a)[0], module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE];
        default:
            b = [];
            for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
            a = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("x", $.NameType$$module$build$src$core$names.VARIABLE);
            return ["''.join([str(" + a + ") for " + a + " in [" + b.join(", ") + "]])", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
        }
    };
    module$exports$Blockly$Python.pythonGenerator.text_append = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        return b + " = str(" + b + ") + " + module$contents$Blockly$Python$texts_forceString(a)[0] + "\n"
    };
    module$exports$Blockly$Python.pythonGenerator.text_length = function (a) {
        return ["len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.text_isEmpty = function (a) {
        return ["not len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT]
    };
    module$exports$Blockly$Python.pythonGenerator.text_indexOf = function (a) {
        var b = "FIRST" === a.getFieldValue("END") ? "find" : "rfind";
        const c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FIND", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        b = (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + "." + b + "(" + c + ")";
        return a.workspace.options.oneBasedIndex ? [b + " + 1", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE] : [b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.text_charAt = function (a) {
        const b = a.getFieldValue("WHERE") || "FROM_START",
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", "RANDOM" === b ? module$exports$Blockly$Python.pythonGenerator.ORDER_NONE : module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''";
        switch (b) {
        case "FIRST":
            return [c + "[0]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
        case "LAST":
            return [c + "[-1]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
        case "FROM_START":
            return a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT"), [c + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
        case "FROM_END":
            return a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT", 1, !0), [c + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
        case "RANDOM":
            return module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random", [module$exports$Blockly$Python.pythonGenerator.provideFunction_("text_random_letter",
                `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(text):
  x = int(random.random() * len(text))
  return text[x]
`) + "(" + c + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
        }
        throw Error("Unhandled option (text_charAt).");
    };
    module$exports$Blockly$Python.pythonGenerator.text_getSubstring = function (a) {
        var b = a.getFieldValue("WHERE1");
        const c = a.getFieldValue("WHERE2"),
            d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "STRING", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''";
        switch (b) {
        case "FROM_START":
            b = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1");
            0 === b && (b = "");
            break;
        case "FROM_END":
            b = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1", 1, !0);
            break;
        case "FIRST":
            b =
                "";
            break;
        default:
            throw Error("Unhandled option (text_getSubstring)");
        }
        switch (c) {
        case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 1);
            break;
        case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 0, !0);
            $.module$build$src$core$utils$string.isNumber(String(a)) ? 0 === a && (a = "") : (module$exports$Blockly$Python.pythonGenerator.definitions_.import_sys = "import sys", a += " or sys.maxsize");
            break;
        case "LAST":
            a = "";
            break;
        default:
            throw Error("Unhandled option (text_getSubstring)");
        }
        return [d + "[" + b + " : " + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER]
    };
    module$exports$Blockly$Python.pythonGenerator.text_changeCase = function (a) {
        const b = {
            UPPERCASE: ".upper()",
            LOWERCASE: ".lower()",
            TITLECASE: ".title()"
        } [a.getFieldValue("CASE")];
        return [(module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.text_trim = function (a) {
        const b = {
            LEFT: ".lstrip()",
            RIGHT: ".rstrip()",
            BOTH: ".strip()"
        } [a.getFieldValue("MODE")];
        return [(module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.text_print = function (a) {
        return "print(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''") + ")\n"
    };
    module$exports$Blockly$Python.pythonGenerator.text_prompt_ext = function (a) {
        var b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("text_prompt", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(msg):
  try:
    return raw_input(msg)
  except NameError:
    return input(msg)
`);
        let c;
        c = a.getField("TEXT") ? module$exports$Blockly$Python.pythonGenerator.quote_(a.getFieldValue("TEXT")) : module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        b = b + "(" + c + ")";
        "NUMBER" === a.getFieldValue("TYPE") && (b = "float(" + b + ")");
        return [b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.text_prompt = module$exports$Blockly$Python.pythonGenerator.text_prompt_ext;
    module$exports$Blockly$Python.pythonGenerator.text_count = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "SUB", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        return [b + ".count(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.text_replace = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''",
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FROM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        return [b + ".replace(" + c + ", " +
            a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER
        ]
    };
    module$exports$Blockly$Python.pythonGenerator.text_reverse = function (a) {
        return [(module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + "[::-1]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER]
    };
    var module$exports$Blockly$Python$procedures = {},
        module$contents$Blockly$Python$procedures_Variables = $.module$build$src$core$variables,
        module$contents$Blockly$Python$procedures_NameType = $.NameType$$module$build$src$core$names;
    module$exports$Blockly$Python.pythonGenerator.procedures_defreturn = function (a) {
        var b = [],
            c = a.workspace,
            d = $.module$build$src$core$variables.allUsedVarModels(c) || [];
        for (let m = 0, n; n = d[m]; m++) {
            var e = n.name; - 1 === a.getVars().indexOf(e) && b.push(module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(e, $.NameType$$module$build$src$core$names.VARIABLE))
        }
        c = $.module$build$src$core$variables.allDeveloperVariables(c);
        for (d = 0; d < c.length; d++) b.push(module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(c[d],
            $.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE));
        c = b.length ? module$exports$Blockly$Python.pythonGenerator.INDENT + "global " + b.join(", ") + "\n" : "";
        b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE);
        d = "";
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX && (d += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX &&
            (d += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a));
        d && (d = module$exports$Blockly$Python.pythonGenerator.prefixLines(d, module$exports$Blockly$Python.pythonGenerator.INDENT));
        e = "";
        module$exports$Blockly$Python.pythonGenerator.INFINITE_LOOP_TRAP && (e = module$exports$Blockly$Python.pythonGenerator.prefixLines(module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.INFINITE_LOOP_TRAP, a),
            module$exports$Blockly$Python.pythonGenerator.INDENT));
        let f = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "STACK"),
            g = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "RETURN", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "",
            h = "";
        f && g && (h = d);
        g ? g = module$exports$Blockly$Python.pythonGenerator.INDENT + "return " + g + "\n" : f || (f = module$exports$Blockly$Python.pythonGenerator.PASS);
        const k = [],
            l = a.getVars();
        for (let m = 0; m < l.length; m++) k[m] = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(l[m],
            $.NameType$$module$build$src$core$names.VARIABLE);
        c = "def " + b + "(" + k.join(", ") + "):\n" + c + d + e + f + h + g;
        c = module$exports$Blockly$Python.pythonGenerator.scrub_(a, c);
        module$exports$Blockly$Python.pythonGenerator.definitions_["%" + b] = c;
        return null
    };
    module$exports$Blockly$Python.pythonGenerator.procedures_defnoreturn = module$exports$Blockly$Python.pythonGenerator.procedures_defreturn;
    module$exports$Blockly$Python.pythonGenerator.procedures_callreturn = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE),
            c = [],
            d = a.getVars();
        for (let e = 0; e < d.length; e++) c[e] = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ARG" + e, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        return [b + "(" + c.join(", ") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.procedures_callnoreturn = function (a) {
        return module$exports$Blockly$Python.pythonGenerator.procedures_callreturn(a)[0] + "\n"
    };
    module$exports$Blockly$Python.pythonGenerator.procedures_ifreturn = function (a) {
        let b = "if " + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "CONDITION", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "False") + ":\n";
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Python.pythonGenerator.prefixLines(module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Python.pythonGenerator.INDENT));
        a.hasReturnValue_ ? (a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None", b += module$exports$Blockly$Python.pythonGenerator.INDENT + "return " + a + "\n") : b += module$exports$Blockly$Python.pythonGenerator.INDENT + "return\n";
        return b
    };
    var module$exports$Blockly$Python$math = {},
        module$contents$Blockly$Python$math_NameType = $.NameType$$module$build$src$core$names;
    module$exports$Blockly$Python.pythonGenerator.addReservedWords("math,random,Number");
    module$exports$Blockly$Python.pythonGenerator.math_number = function (a) {
        a = Number(a.getFieldValue("NUM"));
        let b;
        Infinity === a ? (a = 'float("inf")', b = module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL) : -Infinity === a ? (a = '-float("inf")', b = module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN) : b = 0 > a ? module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN : module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC;
        return [a, b]
    };
    module$exports$Blockly$Python.pythonGenerator.math_arithmetic = function (a) {
        var b = {
            ADD: [" + ", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE],
            MINUS: [" - ", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE],
            MULTIPLY: [" * ", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE],
            DIVIDE: [" / ", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE],
            POWER: [" ** ", module$exports$Blockly$Python.pythonGenerator.ORDER_EXPONENTIATION]
        } [a.getFieldValue("OP")];
        const c = b[0];
        b = b[1];
        const d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "A", b) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "B", b) || "0";
        return [d + c + a, b]
    };
    module$exports$Blockly$Python.pythonGenerator.math_single = function (a) {
        const b = a.getFieldValue("OP");
        let c;
        if ("NEG" === b) return c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUM", module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN) || "0", ["-" + c, module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN];
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math";
        a = "SIN" === b || "COS" === b || "TAN" === b ? module$exports$Blockly$Python.pythonGenerator.valueToCode(a,
            "NUM", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0" : module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        switch (b) {
        case "ABS":
            c = "math.fabs(" + a + ")";
            break;
        case "ROOT":
            c = "math.sqrt(" + a + ")";
            break;
        case "LN":
            c = "math.log(" + a + ")";
            break;
        case "LOG10":
            c = "math.log10(" + a + ")";
            break;
        case "EXP":
            c = "math.exp(" + a + ")";
            break;
        case "POW10":
            c = "math.pow(10," + a + ")";
            break;
        case "ROUND":
            c = "round(" + a + ")";
            break;
        case "ROUNDUP":
            c =
                "math.ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            c = "math.floor(" + a + ")";
            break;
        case "SIN":
            c = "math.sin(" + a + " / 180.0 * math.pi)";
            break;
        case "COS":
            c = "math.cos(" + a + " / 180.0 * math.pi)";
            break;
        case "TAN":
            c = "math.tan(" + a + " / 180.0 * math.pi)"
        }
        if (c) return [c, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
        switch (b) {
        case "ASIN":
            c = "math.asin(" + a + ") / math.pi * 180";
            break;
        case "ACOS":
            c = "math.acos(" + a + ") / math.pi * 180";
            break;
        case "ATAN":
            c = "math.atan(" + a + ") / math.pi * 180";
            break;
        default:
            throw Error("Unknown math operator: " +
                b);
        }
        return [c, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE]
    };
    module$exports$Blockly$Python.pythonGenerator.math_constant = function (a) {
        const b = {
            PI: ["math.pi", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
            E: ["math.e", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
            GOLDEN_RATIO: ["(1 + math.sqrt(5)) / 2", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE],
            SQRT2: ["math.sqrt(2)", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
            SQRT1_2: ["math.sqrt(1.0 / 2)", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
            INFINITY: ["float('inf')", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
        };
        a = a.getFieldValue("CONSTANT");
        "INFINITY" !== a && (module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math");
        return b[a]
    };
    module$exports$Blockly$Python.pythonGenerator.math_number_property = function (a) {
        var b = {
            EVEN: [" % 2 == 0", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
            ODD: [" % 2 == 1", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
            WHOLE: [" % 1 == 0", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
            POSITIVE: [" > 0", module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
            NEGATIVE: [" < 0", module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
            DIVISIBLE_BY: [null, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
            PRIME: [null, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE,
                module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL
            ]
        };
        const c = a.getFieldValue("PROPERTY"),
            [d, e, f] = b[c];
        b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUMBER_TO_CHECK", e) || "0";
        if ("PRIME" === c) module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math", module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number", a = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_isPrime", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(n):
  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods
  # If n is not a number but a string, try parsing it.
  if not isinstance(n, Number):
    try:
      n = float(n)
    except:
      return False
  if n == 2 or n == 3:
    return True
  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.
  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:
    return False
  # Check all the numbers of form 6k +/- 1, up to sqrt(n).
  for x in range(6, int(math.sqrt(n)) + 2, 6):
    if n % (x - 1) == 0 or n % (x + 1) == 0:
      return False
  return True
`) + "(" + b + ")";
        else if ("DIVISIBLE_BY" === c) {
            a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
            if ("0" === a) return ["False", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
            a = b + " % " + a + " == 0"
        } else a = b + d;
        return [a, f]
    };
    module$exports$Blockly$Python.pythonGenerator.math_change = function (a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number";
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DELTA", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        return a + " = (" + a + " if isinstance(" +
            a + ", Number) else 0) + " + b + "\n"
    };
    module$exports$Blockly$Python.pythonGenerator.math_round = module$exports$Blockly$Python.pythonGenerator.math_single;
    module$exports$Blockly$Python.pythonGenerator.math_trig = module$exports$Blockly$Python.pythonGenerator.math_single;
    module$exports$Blockly$Python.pythonGenerator.math_on_list = function (a) {
        var b = a.getFieldValue("OP");
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]";
        switch (b) {
        case "SUM":
            b = "sum(" + a + ")";
            break;
        case "MIN":
            b = "min(" + a + ")";
            break;
        case "MAX":
            b = "max(" + a + ")";
            break;
        case "AVERAGE":
            module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number";
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_mean",
                `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(myList):
  localList = [e for e in myList if isinstance(e, Number)]
  if not localList: return
  return float(sum(localList)) / len(localList)
`) + "(" + a + ")";
            break;
        case "MEDIAN":
            module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number";
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_median", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(myList):
  localList = sorted([e for e in myList if isinstance(e, Number)])
  if not localList: return
  if len(localList) % 2 == 0:
    return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0
  else:
    return localList[(len(localList) - 1) // 2]
`) + "(" + a + ")";
            break;
        case "MODE":
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_modes", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(some_list):
  modes = []
  # Using a lists of [item, count] to keep count rather than dict
  # to avoid "unhashable" errors when the counted item is itself a list or dict.
  counts = []
  maxCount = 1
  for item in some_list:
    found = False
    for count in counts:
      if count[0] == item:
        count[1] += 1
        maxCount = max(maxCount, count[1])
        found = True
    if not found:
      counts.append([item, 1])
  for counted_item, item_count in counts:
    if item_count == maxCount:
      modes.append(counted_item)
  return modes
`) + "(" + a + ")";
            break;
        case "STD_DEV":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math";
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_standard_deviation", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(numbers):
  n = len(numbers)
  if n == 0: return
  mean = float(sum(numbers)) / n
  variance = sum((x - mean) ** 2 for x in numbers) / n
  return math.sqrt(variance)
`) + "(" + a + ")";
            break;
        case "RANDOM":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
            b = "random.choice(" + a + ")";
            break;
        default:
            throw Error("Unknown operator: " + b);
        }
        return [b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.math_modulo = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DIVIDEND", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
        return [b + " % " + a, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE]
    };
    module$exports$Blockly$Python.pythonGenerator.math_constrain = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0",
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LOW", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "HIGH", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "float('inf')";
        return ["min(max(" +
            b + ", " + c + "), " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL
        ]
    };
    module$exports$Blockly$Python.pythonGenerator.math_random_int = function (a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FROM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        return ["random.randint(" + b + ", " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.math_random_float = function (a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
        return ["random.random()", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.math_atan2 = function (a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math";
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "X", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        return ["math.atan2(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "Y", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0") + ", " + b + ") / math.pi * 180", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE]
    };
    var module$exports$Blockly$Python$loops = {},
        module$contents$Blockly$Python$loops_stringUtils = $.module$build$src$core$utils$string,
        module$contents$Blockly$Python$loops_NameType = $.NameType$$module$build$src$core$names;
    module$exports$Blockly$Python.pythonGenerator.controls_repeat_ext = function (a) {
        let b;
        b = a.getField("TIMES") ? String(parseInt(a.getFieldValue("TIMES"), 10)) : module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TIMES", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        b = $.module$build$src$core$utils$string.isNumber(b) ? parseInt(b, 10) : "int(" + b + ")";
        let c = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        c = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(c, a) ||
            module$exports$Blockly$Python.pythonGenerator.PASS;
        return "for " + module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("count", $.NameType$$module$build$src$core$names.VARIABLE) + " in range(" + b + "):\n" + c
    };
    module$exports$Blockly$Python.pythonGenerator.controls_repeat = module$exports$Blockly$Python.pythonGenerator.controls_repeat_ext;
    module$exports$Blockly$Python.pythonGenerator.controls_whileUntil = function (a) {
        const b = "UNTIL" === a.getFieldValue("MODE");
        let c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "BOOL", b ? module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT : module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "False",
            d = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(d, a) || module$exports$Blockly$Python.pythonGenerator.PASS;
        b && (c = "not " + c);
        return "while " + c + ":\n" + d
    };
    module$exports$Blockly$Python.pythonGenerator.controls_for = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        var c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FROM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0",
            d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0",
            e = module$exports$Blockly$Python.pythonGenerator.valueToCode(a,
                "BY", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "1";
        let f = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        f = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(f, a) || module$exports$Blockly$Python.pythonGenerator.PASS;
        let g = "";
        const h = function () {
                return module$exports$Blockly$Python.pythonGenerator.provideFunction_("upRange", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(start, stop, step):
  while start <= stop:
    yield start
    start += abs(step)
`)
            },
            k = function () {
                return module$exports$Blockly$Python.pythonGenerator.provideFunction_("downRange", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(start, stop, step):
  while start >= stop:
    yield start
    start -= abs(step)
`)
            };
        a = function (l, m, n) {
            return "(" + l + " <= " + m + ") and " + h() + "(" + l + ", " + m + ", " + n + ") or " + k() + "(" + l + ", " + m + ", " + n + ")"
        };
        if ($.module$build$src$core$utils$string.isNumber(c) && $.module$build$src$core$utils$string.isNumber(d) && $.module$build$src$core$utils$string.isNumber(e)) c = Number(c), d = Number(d), e = Math.abs(Number(e)), 0 === c % 1 && 0 === d % 1 && 0 === e % 1 ? (c <= d ? (d++, a = 0 === c && 1 === e ? d : c + ", " + d, 1 !== e && (a += ", " + e)) : (d--, a = c + ", " + d + ", -" + e), a = "range(" + a + ")") : (a = c < d ? h() : k(), a += "(" + c + ", " + d + ", " + e + ")");
        else {
            const l = function (m,
                n) {
                $.module$build$src$core$utils$string.isNumber(m) ? m = Number(m) : m.match(/^\w+$/) || (n = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName(b + n, $.NameType$$module$build$src$core$names.VARIABLE), g += n + " = " + m + "\n", m = n);
                return m
            };
            c = l(c, "_start");
            d = l(d, "_end");
            e = l(e, "_inc");
            "number" === typeof c && "number" === typeof d ? (a = c < d ? h() : k(), a += "(" + c + ", " + d + ", " + e + ")") : a = a(c, d, e)
        }
        return g += "for " + b + " in " + a + ":\n" + f
    };
    module$exports$Blockly$Python.pythonGenerator.controls_forEach = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE),
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL) || "[]";
        let d = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(d, a) || module$exports$Blockly$Python.pythonGenerator.PASS;
        return "for " + b + " in " + c + ":\n" + d
    };
    module$exports$Blockly$Python.pythonGenerator.controls_flow_statements = function (a) {
        let b = "";
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX && (b += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a));
        if (module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX) {
            const c =
                a.getSurroundLoop();
            c && !c.suppressPrefixSuffix && (b += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, c))
        }
        switch (a.getFieldValue("FLOW")) {
        case "BREAK":
            return b + "break\n";
        case "CONTINUE":
            return b + "continue\n"
        }
        throw Error("Unknown flow statement.");
    };
    var module$exports$Blockly$Python$logic = {};
    module$exports$Blockly$Python.pythonGenerator.controls_if = function (a) {
        let b = 0,
            c = "",
            d, e;
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX && (c += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, a));
        do e = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "IF" + b, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "False", d = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO" + b) || module$exports$Blockly$Python.pythonGenerator.PASS,
            module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$Python.pythonGenerator.prefixLines(module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Python.pythonGenerator.INDENT) + d), c += (0 === b ? "if " : "elif ") + e + ":\n" + d, b++; while (a.getInput("IF" + b));
        if (a.getInput("ELSE") || module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX) d = module$exports$Blockly$Python.pythonGenerator.statementToCode(a,
            "ELSE") || module$exports$Blockly$Python.pythonGenerator.PASS, module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$Python.pythonGenerator.prefixLines(module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Python.pythonGenerator.INDENT) + d), c += "else:\n" + d;
        return c
    };
    module$exports$Blockly$Python.pythonGenerator.controls_ifelse = module$exports$Blockly$Python.pythonGenerator.controls_if;
    module$exports$Blockly$Python.pythonGenerator.logic_compare = function (a) {
        const b = {
                EQ: "==",
                NEQ: "!=",
                LT: "<",
                LTE: "<=",
                GT: ">",
                GTE: ">="
            } [a.getFieldValue("OP")],
            c = module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL,
            d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "A", c) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "B", c) || "0";
        return [d + " " + b + " " + a, c]
    };
    module$exports$Blockly$Python.pythonGenerator.logic_operation = function (a) {
        const b = "AND" === a.getFieldValue("OP") ? "and" : "or",
            c = "and" === b ? module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND : module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR;
        let d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "A", c);
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "B", c);
        if (d || a) {
            const e = "and" === b ? "True" : "False";
            d || (d = e);
            a || (a = e)
        } else a = d = "False";
        return [d + " " + b + " " + a,
            c
        ]
    };
    module$exports$Blockly$Python.pythonGenerator.logic_negate = function (a) {
        return ["not " + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "BOOL", module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT) || "True"), module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT]
    };
    module$exports$Blockly$Python.pythonGenerator.logic_boolean = function (a) {
        return ["TRUE" === a.getFieldValue("BOOL") ? "True" : "False", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
    };
    module$exports$Blockly$Python.pythonGenerator.logic_null = function (a) {
        return ["None", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
    };
    module$exports$Blockly$Python.pythonGenerator.logic_ternary = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "IF", module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL) || "False",
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "THEN", module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL) || "None";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ELSE", module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL) || "None";
        return [c + " if " + b + " else " + a, module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL]
    };
    var module$exports$Blockly$Python$lists = {},
        module$contents$Blockly$Python$lists_stringUtils = $.module$build$src$core$utils$string,
        module$contents$Blockly$Python$lists_NameType = $.NameType$$module$build$src$core$names;
    module$exports$Blockly$Python.pythonGenerator.lists_create_empty = function (a) {
        return ["[]", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_create_with = function (a) {
        const b = Array(a.itemCount_);
        for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        return ["[" + b.join(", ") + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_repeat = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ITEM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUM", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
        return ["[" + b + "] * " + a, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_length = function (a) {
        return ["len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_isEmpty = function (a) {
        return ["not len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_indexOf = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FIND", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]",
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        let d = " -1",
            e = "",
            f = " - 1";
        a.workspace.options.oneBasedIndex && (d = " 0", e = " + 1", f = "");
        return [("FIRST" === a.getFieldValue("END") ? module$exports$Blockly$Python.pythonGenerator.provideFunction_("first_index",
            `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(my_list, elem):
  try: index = my_list.index(elem)${e}
  except: index =${d}
  return index
`) : module$exports$Blockly$Python.pythonGenerator.provideFunction_("last_index", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(my_list, elem):
  try: index = len(my_list) - my_list[::-1].index(elem)${f}
  except: index =${d}
  return index
`)) + "(" + c + ", " + b + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_getIndex = function (a) {
        const b = a.getFieldValue("MODE") || "GET",
            c = a.getFieldValue("WHERE") || "FROM_START";
        var d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", "RANDOM" === c ? module$exports$Blockly$Python.pythonGenerator.ORDER_NONE : module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "[]";
        switch (c) {
        case "FIRST":
            if ("GET" === b) return [d + "[0]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d +
                ".pop(0)", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL
            ];
            if ("REMOVE" === b) return d + ".pop(0)\n";
            break;
        case "LAST":
            if ("GET" === b) return [d + "[-1]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d + ".pop()", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + ".pop()\n";
            break;
        case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT");
            if ("GET" === b) return [d + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d + ".pop(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + ".pop(" + a + ")\n";
            break;
        case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT", 1, !0);
            if ("GET" === b) return [d + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d + ".pop(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + ".pop(" + a + ")\n";
            break;
        case "RANDOM":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_random =
                "import random";
            if ("GET" === b) return ["random.choice(" + d + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            d = module$exports$Blockly$Python.pythonGenerator.provideFunction_("lists_remove_random_item", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(myList):
  x = int(random.random() * len(myList))
  return myList.pop(x)
`) + "(" + d + ")";
            if ("GET_REMOVE" === b) return [d, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + "\n"
        }
        throw Error("Unhandled combination (lists_getIndex).");
    };
    module$exports$Blockly$Python.pythonGenerator.lists_setIndex = function (a) {
        let b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "[]";
        const c = a.getFieldValue("MODE") || "GET";
        var d = a.getFieldValue("WHERE") || "FROM_START";
        const e = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        switch (d) {
        case "FIRST":
            if ("SET" === c) return b + "[0] = " + e + "\n";
            if ("INSERT" ===
                c) return b + ".insert(0, " + e + ")\n";
            break;
        case "LAST":
            if ("SET" === c) return b + "[-1] = " + e + "\n";
            if ("INSERT" === c) return b + ".append(" + e + ")\n";
            break;
        case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT");
            if ("SET" === c) return b + "[" + a + "] = " + e + "\n";
            if ("INSERT" === c) return b + ".insert(" + a + ", " + e + ")\n";
            break;
        case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT", 1, !0);
            if ("SET" === c) return b + "[" + a + "] = " + e + "\n";
            if ("INSERT" === c) return b + ".insert(" + a + ", " +
                e + ")\n";
            break;
        case "RANDOM":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
            b.match(/^\w+$/) ? a = "" : (a = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("tmp_list", $.NameType$$module$build$src$core$names.VARIABLE), d = a + " = " + b + "\n", b = a, a = d);
            d = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("tmp_x", $.NameType$$module$build$src$core$names.VARIABLE);
            a += d + " = int(random.random() * len(" + b + "))\n";
            if ("SET" === c) return a + (b + "[" +
                d + "] = " + e + "\n");
            if ("INSERT" === c) return a + (b + ".insert(" + d + ", " + e + ")\n")
        }
        throw Error("Unhandled combination (lists_setIndex).");
    };
    module$exports$Blockly$Python.pythonGenerator.lists_getSublist = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "[]";
        var c = a.getFieldValue("WHERE1");
        const d = a.getFieldValue("WHERE2");
        switch (c) {
        case "FROM_START":
            c = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1");
            0 === c && (c = "");
            break;
        case "FROM_END":
            c = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1", 1, !0);
            break;
        case "FIRST":
            c = "";
            break;
        default:
            throw Error("Unhandled option (lists_getSublist)");
        }
        switch (d) {
        case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 1);
            break;
        case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 0, !0);
            $.module$build$src$core$utils$string.isNumber(String(a)) ? 0 === a && (a = "") : (module$exports$Blockly$Python.pythonGenerator.definitions_.import_sys = "import sys", a += " or sys.maxsize");
            break;
        case "LAST":
            a = "";
            break;
        default:
            throw Error("Unhandled option (lists_getSublist)");
        }
        return [b + "[" + c + " : " + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_sort = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]",
            c = a.getFieldValue("TYPE");
        a = "1" === a.getFieldValue("DIRECTION") ? "False" : "True";
        return [module$exports$Blockly$Python.pythonGenerator.provideFunction_("lists_sort", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(my_list, type, reverse):
  def try_float(s):
    try:
      return float(s)
    except:
      return 0
  key_funcs = {
    "NUMERIC": try_float,
    "TEXT": str,
    "IGNORE_CASE": lambda s: str(s).lower()
  }
  key_func = key_funcs[type]
  list_cpy = list(my_list)
  return sorted(list_cpy, key=key_func, reverse=reverse)
`) + "(" + b + ', "' + c + '", ' + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_split = function (a) {
        var b = a.getFieldValue("MODE");
        if ("SPLIT" === b) b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "INPUT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''", a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DELIM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE), a = b + ".split(" + a + ")";
        else if ("JOIN" === b) b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "INPUT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) ||
            "[]", a = (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DELIM", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + ".join(" + b + ")";
        else throw Error("Unknown mode: " + b);
        return [a, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.lists_reverse = function (a) {
        return ["list(reversed(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]") + "))", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    var module$exports$Blockly$Python$colour = {};
    module$exports$Blockly$Python.pythonGenerator.colour_picker = function (a) {
        return [module$exports$Blockly$Python.pythonGenerator.quote_(a.getFieldValue("COLOUR")), module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
    };
    module$exports$Blockly$Python.pythonGenerator.colour_random = function (a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
        return ["'#%06x' % random.randint(0, 2**24 - 1)", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.colour_rgb = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("colour_rgb", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(r, g, b):
  r = round(min(100, max(0, r)) * 2.55)
  g = round(min(100, max(0, g)) * 2.55)
  b = round(min(100, max(0, b)) * 2.55)
  return '#%02x%02x%02x' % (r, g, b)
`),
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "RED", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0,
            d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "GREEN", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0;
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "BLUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0;
        return [b + "(" + c + ", " + d + ", " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    module$exports$Blockly$Python.pythonGenerator.colour_blend = function (a) {
        const b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("colour_blend", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(colour1, colour2, ratio):
  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)
  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)
  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)
  ratio = min(1, max(0, ratio))
  r = round(r1 * (1 - ratio) + r2 * ratio)
  g = round(g1 * (1 - ratio) + g2 * ratio)
  b = round(b1 * (1 - ratio) + b2 * ratio)
  return '#%02x%02x%02x' % (r, g, b)
`),
            c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "COLOUR1", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "'#000000'",
            d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "COLOUR2", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "'#000000'";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "RATIO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0;
        return [b + "(" + c + ", " + d + ", " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL]
    };
    var module$exports$Blockly$Python$all = module$exports$Blockly$Python;
    module$exports$Blockly$Python.__namespace__ = $;
    return module$exports$Blockly$Python;
}));