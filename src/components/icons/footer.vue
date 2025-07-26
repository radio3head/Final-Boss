<template>
  <footer class="container">
    <div class="branding-social">
      <h2>
        AK<span class="red-dot"><img src="/girlsimg/logo.png" alt="" /></span>TSUKI
      </h2>
      <div class="social-icons">
        <span><img src="/girlsimg/xlo.png" alt="" /></span>
        <span><img src="/girlsimg/tiktok.png" alt="" /></span>
        <span><img src="/girlsimg/insta.png" alt="" /></span>
        <span><img src="/girlsimg/facebook.png" alt="" /></span>
      </div>
    </div>

    <div class="footer-links">
      <ul>
        <li>Descriere audio</li>
        <li>Mențiuni legale</li>
        <li>Asistență</li>
      </ul>

      <ul>
        <li>Preferințe de cookie</li>
        <li>Condiții de utilizare</li>
        <li>Cariere</li>
      </ul>

      <ul>
        <li>Carduri cadou</li>
        <li>Declarația de confidențialitate</li>
        <li>Centru media</li>
      </ul>
    </div>
    
    <div class="copyright">Akatsuki ©All rights reserved.</div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 1216px;
  margin: auto;
}

.cautare img {
  width: 32px;
  height: 31px;
  margin-left: 12px;
  margin-right: 12px;
}

#me {
  border-radius: 8px;
}

.buttons img {
  float: left;
  width: 30px;
  height: 30px;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 89px;
}

.buttons {
  margin-right: -320px;
}

#ne {
  background-image: linear-gradient(black, #7b0709, black);
}

.textf {
  text-align: left;
  margin-top: 217px;
}

.textf a {
  text-decoration: none;
  color: #989898;
}

.textc a {
  text-decoration: none;
  color: #989898;
}

.textd a {
  text-decoration: none;

  color: #989898;
}

.textd {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.wrap a:hover {
  color: rgb(255, 255, 255);
  cursor: pointer;
}

.copyright {
  text-align: center;
  font-family: 'Nunito';

  font-weight: 600;
  font-style: bold;
  font-size: 17px;
}

.buttons img:hover {
  background: rgba(103, 66, 66, 0.369);
  border-radius: 5px;
}

.prenex a {
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  color: #ddd;
}
.prenex {
  display: flex;
  justify-content: center;
}

.prenex a:hover {
  color: rgb(105, 104, 104);
}

footer {
  color: #fff;
  padding: 30px;
  font-family: Arial, sans-serif;
}
.pagination {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Nunito';
  font-size: 18px;
  color: #747474;
}
.pagination span {
  margin: 0 5px;
  color: #ccc;
}

.buton {
  margin: 0 5px;
  color: #747474;
  border: 1px solid #747474;
}

.buton2 {
  margin: 0 5px;
  color: #747474;
  border: 1px solid white;
}
.branding-social {
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}
.branding-social h2 {
  font-size: 24px;
  font-weight: bold;
}
.red-dot img {
  color: red;
  width: 46px;
  height: 26px;
}

.social-icons span img {
  font-size: 14px;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  margin: 0;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 125px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}
.footer-links li {
  margin: 5px 0;
  font-size: 14px;
  color: #989898;
}
.footer-links li:hover {
  color: white;
}
.copyright {
  text-align: center;
  font-size: 13px;
  color: #888;
}
</style>