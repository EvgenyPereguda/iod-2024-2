
// "" + 1 + 0
if (("" + 1 + 0) != "10") { error }

// "" - 1 + 0
if (("" - 1 + 0) != "-1") { error }

// true + false
if ((true + false) != true) { error }

// !true
if ((!true) != false) { error }

// 6 / "3"
if ((6 / "3") != 2) { error }

// "2" * "3"
if (("2" * "3") != 6) { error }

// 4 + 5 + "px"
if ((4 + 5 + "px") != "9px") { error }

// "$" + 4 + 5
if (("$" + 4 + 5) != "$45") { error }

// "4" - 2
if (("4" - 2) != 2) { error }

// "4px" - 2
if (!isNaN("4px" - 2)) { error }

// " -9 " + 5
if ((" -9 " + 5) != " -9 5") { error }

// " -9 " - 5
if ((" -9 " - 5) != " -14 ") { error }

// null + 1
if ((null + 1) != 1) { error }

// undefined + 1
if (!isNaN(undefined + 1)) { error }

// undefined == null
if ((undefined == null) != true) { error }

// undefined === null
if ((undefined === null) != false) { error }

// " \t \n" - 2
if ((" \t \n" - 2) != -2) { error }