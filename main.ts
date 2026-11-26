//% color="#087F8C" icon="\uf1eb" block="Studio Connect" weight=90 groups=["Connection","Send data","Receive commands"]
namespace studioConnect {
    //% blockId=studioConnect_connect block="connect to Studio" group="Connection" weight=100
    export function connect(): void {
        serial.redirectToUSB(); serial.setBaudRate(BaudRate.BaudRate115200)
    }
    function send(line: string): void {
        serial.writeString(line + "\n")
    }
    //% blockId=studioConnect_sendNumber block="send number %name value %value" group="Send data" weight=100
    //% name.defl="score"
    export function sendNumber(name: string, value: number): void {
        send(name + ":" + value)
    }
    //% blockId=studioConnect_sendText block="send text %name value %value" group="Send data" weight=90
    //% name.defl="status" value.defl="Ready"
    export function sendText(name: string, value: string): void {
        send(name + ":" + value)
    }
    //% blockId=studioConnect_sendDisplay block="send current LED display" group="Send data" weight=80
    export function sendDisplay(): void {
        let pattern = ""
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                pattern += led.point(x, y) ? "1" : "0"
            }
        }
        send("led:" + pattern)
    }
    //% blockId=studioConnect_onMessage block="on Studio message $message" group="Receive commands" weight=100
    //% draggableParameters="reporter"
    export function onMessage(handler: (message: string) => void): void {
        serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            let message = serial.readUntil(serial.delimiters(Delimiters.NewLine))
            if (message == "PING") send("studio:PONG")
            else handler(message)
        })
    }
}
