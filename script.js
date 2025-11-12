/* ===== script.js ===== */ document.getElementById('shareBtn').addEventListener('click', () => document.getElementById('modal').classList.add('open') );

document.getElementById('closeModal').addEventListener('click', () => document.getElementById('modal').classList.remove('open') );

document.getElementById('copyBtn').addEventListener('click', () => { const el = document.getElementById('pageLink'); el.select(); el.setSelectionRange(0, 99999); try { document.execCommand('copy'); alert('تم نسخ الرابط'); } catch (e) { alert('انسخ يدوياً: ' + el.value); } });

document.getElementById('primaryBtn').addEventListener('click', () => alert('تم الضغط على العمل الرئيسي') );

document.getElementById('buyBtn').addEventListener('click', () => alert('شكراً! تم إضافة العنصر إلى السلة (وصف توضيحي)') );
