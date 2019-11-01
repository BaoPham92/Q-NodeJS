@ECHO OFF
set mypath=%cd%
powershell -noprofile -command "&{ start-process powershell -ArgumentList '-noprofile -file %cd%\python_install.ps1' -verb RunAs}"