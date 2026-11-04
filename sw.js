// خدمة بسيطة: تخلي التطبيق قابل للتثبيت، وكل الاتصال يفضل مباشر مع Firebase
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {});
