use std::io;

fn main() {
    println!("Enter temp in Celsius:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed");
    let c: f64 = input.trim().parse().unwrap();
    let f = c * 1.8 + 32.0;
    println!("Fahrenheit: {}", f);
}
