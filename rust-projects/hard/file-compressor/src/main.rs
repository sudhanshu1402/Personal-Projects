use flate2::write::GzEncoder;
use flate2::Compression;
use std::fs::File;
use std::io::copy;
use std::io::BufReader;
use std::time::Instant;

fn main() {
    let mut input = BufReader::new(File::open("input.txt").unwrap());
    let output = File::create("output.gz").unwrap();
    let mut encoder = GzEncoder::new(output, Compression::default());
    let start = Instant::now();
    copy(&mut input, &mut encoder).unwrap();
    encoder.finish().unwrap();
    println!("Compressed in {:?}", start.elapsed());
}
