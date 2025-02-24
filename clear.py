from bs4 import BeautifulSoup

# Указываем путь к файлу
file_path = "spo_cco-4.html"
new_file_path = "spo_cco-4_updated.html"

# Читаем HTML-файл
with open(file_path, "r", encoding="utf-8") as file:
    soup = BeautifulSoup(file, "html.parser")

# Находим и заменяем все ссылки
for a_tag in soup.find_all("a", href=True):
    a_tag["href"] = "javascript:void(0);"

# Сохраняем изменения в новый файл
with open(new_file_path, "w", encoding="utf-8") as file:
    file.write(str(soup))

print(f"✅ Файл обновлён: {new_file_path}")
