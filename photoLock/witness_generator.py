def main(*argv, **kwargs):
    height = argv[0]
    width = argv[1]
    cr_height = argv[2]
    cr_width = argv[3]
    hash_value = argv[4]
    cropped_image = [9]*(height*width)
    original_image = [9]*(cr_height*cr_width)
    witness = f'''original_image = {original_image}'''
    print(witness)

if __name__ == "__main__":
    main(500, 500, 200, 200, "")

#hash = "{hash_value}"\n
#offset_x = 100\n
#offset_y = 100\n
#cropped_image = {cropped_image}\n
