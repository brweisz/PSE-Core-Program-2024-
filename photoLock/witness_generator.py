def main(*argv, **kwargs):
    height = argv[0]
    width = argv[1]
    cr_height = argv[2]
    cr_width = argv[3]
    hash_value = argv[4]
    cropped_image = [9]*(height*width)
    original_image = [9]*(cr_height*cr_width)
    offset_x = 14
    offset_y = 14
    crop_size = (cr_height, cr_width)
    witness = f'''original_image = {original_image}\nhash = "{hash_value}"\noffset_x = {offset_x}\noffset_y = {offset_y}\ncropped_image = {cropped_image}\ncrop_size={crop_size}'''
    print(witness)

if __name__ == "__main__":
    main(30, 30, 5, 5, 0xa)

