import os
from bs4 import BeautifulSoup

folder_path = r"C:\MyWebSites\First"

for root, _, files in os.walk(folder_path):
    for file in files:
        if file.lower() == "index.html":
            file_path = os.path.join(root, file)
            print(f"Обрабатываем файл: {file_path}")

            with open(file_path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            modified = False

            # Ищем все теги <meta>, у которых name="robots"
            meta_tags = soup.find_all("meta", attrs={"name": "robots"})

            if meta_tags:
                for meta_tag in meta_tags:
                    content = meta_tag.get("content", "").lower()
                    if "noindex" in content or "nofollow" in content:
                        print(f"🔄 Заменяем: {meta_tag}")
                        meta_tag["content"] = "index, follow"
                        modified = True
            else:
                print("➕ Добавляем <meta name='robots' content='index, follow'>")
                new_meta = soup.new_tag("meta", content="index, follow")
                new_meta["name"] = "robots"
                
                if soup.head:
                    soup.head.append(new_meta)
                else:
                    print("⚠ Ошибка: <head> не найден!")
                
                modified = True

            if modified:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(str(soup))
                print(f"✅ Файл изменён: {file_path}")
            else:
                print(f"❌ Нет изменений: {file_path}")
