function compile() {
    const code = document.getElementById("code").value.trim();
    const result = document.getElementById("result");

    let variables = {};
    let output = "";

    const lines = code.split("\n");

    function evaluate(exp) {
        for (let key in variables) {
            exp = exp.replaceAll(key, variables[key]);
        }

        if (exp.startsWith('"') && exp.endsWith('"')) {
            return exp.slice(1, -1);
        }

        try {
            return eval(exp);
        } catch {
            return exp;
        }
    }

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        if (line.startsWith("let ")) {
            let parts = line.substring(4).split("=");
            variables[parts[0].trim()] = evaluate(parts[1].trim());
        } else if (line.startsWith("print ")) {
            output += evaluate(line.substring(6).trim()) + "<br>";
        }
    }

    result.innerHTML = output;
}
