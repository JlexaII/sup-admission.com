import re

# Читаем содержимое HTML-файла
file_path = "2017trp.html"

with open(file_path, "r", encoding="utf-8") as file:
    html_content = file.read()

# Заменяем ссылки javascript:void(0); на #
updated_html = re.sub(r'href=javascript:void\(0\);', 'href="#"', html_content)

# Сохраняем изменения в новом файле
new_file_path = "index_updated.html"
with open(new_file_path, "w", encoding="utf-8") as file:
    file.write(updated_html)

print(f"Файл успешно обновлен и сохранен как {new_file_path}")
