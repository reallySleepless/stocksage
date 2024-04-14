import os

def remove_word_from_filenames(directory, word):
    # Get the list of files in the directory
    files = os.listdir(directory)

    # Iterate through each file
    for file_name in files:
        # Check if the word is in the file name
        if word in file_name:
            # Construct the new file name by removing the word
            new_file_name = file_name.replace(word, '')

            # Create the full file paths
            old_path = os.path.join(directory, file_name)
            new_path = os.path.join(directory, new_file_name)

            # Rename the file
            os.rename(old_path, new_path)

            print(f'Renamed: {file_name} -> {new_file_name}')

# Specify the directory and the word to remove
directory_path = r'H:\FINALYEARPROJECT\PROJECT\datasets\New\New'
word_to_remove = 'daily_'

# Call the function
remove_word_from_filenames(directory_path, word_to_remove)
