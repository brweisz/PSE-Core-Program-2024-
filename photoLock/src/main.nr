fn main(original_image: [Field; 250000], /*offset_x: u32, offset_y: u32, cropped_image: pub [Field; 40000], hash: pub Field*/) {
    //assert(std::hash::poseidon2::Poseidon2::hash(original_image, 900) == hash);
    //let side = 300;
    let cropped_image = [Field; 10000];
    for i in 0..100 {
        for j in 0..100 {
            assert(original_image[500*(i+100)+(j+100)] == cropped_image[side*i+j]);
        }
    }
}

/*fn main(arr: [Field; 10000], from: u16, to: u16){
    for i in 0..10000 {
        if(i >= from & i < to) {
            assert(arr[i] == 0);
        }
    }
}*/
