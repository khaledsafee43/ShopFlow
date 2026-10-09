# ShopFlow — React Practice Starter

این پروژه عمداً **غیر Interactive** ساخته شده است.

یعنی:
- هیچ Context ندارد.
- هیچ `useState` ندارد.
- هیچ `useEffect` ندارد.
- هیچ Router فعال ندارد.
- Search کار نمی‌کند.
- Filter کار نمی‌کند.
- Sort کار نمی‌کند.
- Add to Cart کار نمی‌کند.
- Quantity کار نمی‌کند.
- Login واقعی نیست.
- Form validation ندارد.
- localStorage ندارد.
- API ندارد.

تو باید همه این‌ها را خودت بسازی.

## سطح پروژه

کد ساده نگه داشته شده و از abstractionهای سنگین استفاده نشده است. هدف این نیست که یک پروژه production-ready را کپی کنی؛ هدف این است که منطق React را خودت پیاده کنی.

## ترتیب پیشنهادی تمرین

### مرحله 1 — Components + Props
1. `ProductCard` را بخوان.
2. اطلاعات محصول از `products.js` با props وارد Card می‌شود.
3. یک prop جدید مثل `onAddToCart` اضافه کن، ولی فعلاً خودت منطقش را بنویس.

### مرحله 2 — useState
1. در Home یک state برای تعداد Cart بساز.
2. با کلیک Add to cart مقدار را زیاد کن.
3. Cart count را در Navbar نمایش بده.

### مرحله 3 — Search
1. در Products یک state به نام `search` بساز.
2. input را controlled کن.
3. با `filter()` محصولات را بر اساس title فیلتر کن.

### مرحله 4 — Category + Sort
1. category را state کن.
2. محصولات را بر اساس category فیلتر کن.
3. sort را اضافه کن.
4. حواست باشد filter و sort را خراب نکنی.

### مرحله 5 — Cart
یک state برای آرایه Cart بساز:
```js
const [cart, setCart] = useState([])
```
بعد این سناریوها را پیاده کن:
- add item
- remove item
- increase quantity
- decrease quantity
- subtotal
- total

### مرحله 6 — Lifting State
Cart نباید در ProductCard جداگانه باشد.
State اصلی را در component مناسب نگه دار و functionها را با props پایین بفرست.

### مرحله 7 — Context
وقتی Props Drilling زیاد شد، Cart state را به `ShopContext` منتقل کن.

### مرحله 8 — localStorage
Cart را ذخیره کن تا با refresh از بین نرود.

### مرحله 9 — Forms
Login، Contact و Checkout را controlled form کن.
برای هر input state و handler داشته باش.

### مرحله 10 — Validation
حداقل این‌ها را بررسی کن:
- required
- email format
- minimum password length
- phone
- address

### مرحله 11 — React Router
صفحه‌های زیر را route کن:
- `/`
- `/products`
- `/products/:id`
- `/cart`
- `/checkout`
- `/login`
- `/contact`
- `/about`

### مرحله 12 — API
بعد از اینکه نسخه local را کامل کردی، `products.js` را حذف نکن؛ اول API را جدا تست کن.
بعد products را از Express API بگیر.

سناریوهای API:
- GET products
- GET product by id
- POST product
- PUT product
- DELETE product

### مرحله 13 — Loading + Error
برای API این stateها را اضافه کن:
```js
loading
error
data
```

### مرحله 14 — Authentication
آخر کار:
- Register
- Login
- JWT
- Protected routes
- Logout

## قانون مهم

تا وقتی مرحله فعلی را خودت نتوانستی بسازی، به مرحله بعد نرو.

اگر Add to Cart را نمی‌توانی با `useState` بسازی، رفتن مستقیم به Context یا Redux فقط حفظ کردن کد است و یادگیری نیست.

## شروع

```bash
npm install
npm run dev
```

بعد فقط از Home شروع کن.
