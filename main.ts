enum Types {
    Fahrenheit,
    Celsius,
    Kelvin,
}
//% color=#000000 weight=0 icon="\uf2d6" block="Temperature Converting"
namespace temp {
    //% block="convert $temperature from $_type to $to_type"
    export function convert (_type: Types, temperature: number, to_type: Types) {
        if (_type == Types.Fahrenheit) {
            if (to_type == Types.Celsius) {
                return (temperature - 32) * 5/9
            } else if (to_type == Types.Kelvin) {
                return ((temperature - 32) * 5/9) + 273.15
            }
        } else if (_type == Types.Celsius) {
            if (to_type == Types.Fahrenheit) {
                return (temperature * 9/5) + 32
            } else if (to_type == Types.Kelvin) {
                return temperature + 273.15
            }
        } else if (_type == Types.Kelvin) {
            if (to_type == Types.Celsius) {
                return temperature - 273.15
            } else if (to_type == Types.Fahrenheit) {
                return ((temperature - 273.15) * 9/5) + 32
            }
        }
        if (to_type == _type) {
            return temperature
        }
        return NaN
    }
}
