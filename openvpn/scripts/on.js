// Run BROADcast (with console window hidden)

WScript.CreateObject ("Wscript.Shell").Run ("\"" + WScript.ScriptFullName.substr (0, WScript.ScriptFullName.lastIndexOf ("\\") + 1) + "..\\..\\broadcast.exe\" /b", 0, 0);
