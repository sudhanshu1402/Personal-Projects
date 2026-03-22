use std::io;

fn main() {
    println!("Enter expression (e.g. 5 + 10):");
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let parts: Vec<&str> = input.trim().split_whitespace().collect();
    let n1: f64 = parts[0].parse().unwrap();
    let op = parts[1];
    let n2: f64 = parts[2].parse().unwrap();
    
    let res = match op {
        "+" => n1 + n2,
        "-" => n1 - n2,
        "*" => n1 * n2,
        "/" => n1 / n2,
        _ => 0.0,
    };
    println!("Result: {}", res);
}
