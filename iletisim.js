const { createApp } = Vue;

createApp({
  data() {
    return {
      form: {
        adSoyad: '',
        email: '',
        telefon: '',
        mesaj: ''
      },
      uyariMesajlari: []
    };
  },
  methods: {
    formuTemizle() {
      this.form = {
        adSoyad: '',
        email: '',
        telefon: '',
        mesaj: ''
      };
      this.uyariMesajlari = [];
    },
    formuDogrula() {
      this.uyariMesajlari = this.dogrulamaMesajlari();
    },
    formuGonder() {
      const mesajlar = this.dogrulamaMesajlari();
      if (mesajlar.length > 0) {
        this.uyariMesajlari = mesajlar;
        return;
      }
      localStorage.setItem('formVerisi', JSON.stringify(this.form));
      window.location.href = 'sonuc.html';
    },
    dogrulamaMesajlari() {
    const mesajlar = [];

    const adSoyad = this.form.adSoyad.trim();
    const email = this.form.email.trim();
    const telefon = this.form.telefon.trim();
    const mesaj = this.form.mesaj.trim();

    if (!adSoyad) mesajlar.push('Ad Soyad boş bırakılamaz');

     if (!email) {
        mesajlar.push('Email boş bırakılamaz');
     } else if (
        email.indexOf('@') === -1 || 
        email.indexOf('.') === -1 || 
        email.startsWith('@') || 
        email.endsWith('@') || 
        email.split('@').length !== 2
    ) {
        mesajlar.push('Geçerli bir email giriniz');
    }

    if (!telefon) {
        mesajlar.push('Telefon boş bırakılamaz');
    } else if (telefon.length !== 10 || isNaN(telefon)) {
        mesajlar.push('Telefon sadece 10 haneli rakam olmalı');
    }

    if (!mesaj || mesaj.length < 10) {
        mesajlar.push('Mesaj en az 10 karakter olmalıdır');
    }

    return mesajlar;
    }
    }
    }).mount('#app');