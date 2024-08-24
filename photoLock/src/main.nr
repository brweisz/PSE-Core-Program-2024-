fn main(original_image: [Field; 900], offset_x: u32, offset_y: u32, cropped_image: pub [Field; 900], hash: pub Field, crop_size: pub (u32, u32)) {
    // Image is of size (30, 30)
    for i in 0..crop_size.0 {
        for j in 0..crop_size.1 {
            assert(original_image[30*(i+offset_x)+(j+offset_y)] == cropped_image[crop_size.0*i+j]);
        }
    }
    
    //assert(std::hash::poseidon2::Poseidon2::hash(original_image, 900) == hash);
    // desired length of the first digest: 100
    let mut digest: [Field; 100] = [0; 100];
    for i in 0..100 {
        for j in 0..9 {
            digest[i] += original_image[9*i+j];
        }
    }
    assert(hash == std::hash::poseidon2::Poseidon2::hash(digest, 100));

}

/*fn main(arr: [Field; 10000], from: u16, to: u16){
    for i in 0..10000 {
        if(i >= from & i < to) {
            assert(arr[i] == 0);
        }
    }
}*/
