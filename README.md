# pxt-studio-connect-usb
custom blocks for makecode micro:bit to connect to a virtual interface 


# Studio Connect (USB)
Import https://github.com/aaron-ragsdale/pxt-studio-connect-usb in MakeCode Extensions. Add connect to Studio on start, send number or text anywhere, and register one on Studio message handler to receive commands. The handler automatically answers PING with studio:PONG.

Dashboard: https://aaron-ragsdale.github.io/microbitStudio/

Protocol: newline-delimited name:value messages; incoming commands are newline-delimited strings. LED patterns use led: followed by 25 binary digits.

USB serial at 115200 baud; radio remains available.

Experimental: compilation and physical device testing are required.
