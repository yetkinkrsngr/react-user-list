import React from "react";
// Bu satırda React kütüphanesinden 'react' adında bir nesne içe aktarılıyor.
// Bu, React bileşenlerini oluşturmak ve kullanmak için gerekli olan temel işlevleri içerir.
const Header = () => {
  return (
    <header>
      <h1>Our Users </h1>
    </header>
  );
  // Bu kısımda bir fonksiyon bileşeni tanımlanıyor. Fonksiyon bileşenleri
  // modern React uygulamalarında kullanılan bir bileşen tanımlama yöntemidir.
  // Burası bileşen fonksiyonunun gövdesidir. Bileşen fonksiyonunun içindeki
  // JSX (JavaScript XML) kullanılarak bileşenin döndüreceği içerik oluşturulur.
  // JSX, React bileşenlerini tanımlamak ve oluşturmak için kullanılan bir
  // dil uzantısıdır.
  // Bu örnek kodda fonksiyon bileşeni boş olarak tanımlanmıştır, yani içeriği yoktur.
  // Daha fazla işlevsellik eklemek istediğinizde, bu fonksiyonun içine JSX
  // elemanları ekleyebilirsiniz.
};

export default Header;
// Bu satırda oluşturduğumuz Header bileşenini dışa aktarıyoruz. Böylece
// bu bileşeni başka dosyalarda kullanabiliriz.
