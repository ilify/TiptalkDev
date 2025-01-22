<script>
    //"/assets/images/HomeImages/02-Green_Blue_LM-4K.png"
  export let img;
</script>

<phone style="justify-content: start;">
    <img src={img} alt=" " />
  <notch></notch>
  <btn1></btn1>
  <btn2></btn2>
  <btn3></btn3>
</phone>

<style>
  phone {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 50px;
    width: 370px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
    aspect-ratio: 9/16;
    border: #ffffff71 1px solid;
    border-top: none;
    outline: #000000 12px solid;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    position: relative;
    notch {
      display: block;
      position: absolute;
      top: 10px;
      width: 100px;
      height: 28px;
      background: #000000;
      border-radius: 50px;
    }

    btn1 {
      display: block;
      width: 4px;
      height: 70px;
      background: #000000;
      border-radius: 0 50px 50px 0;
      position: absolute;
      right: -17px;
      top: 20%;
    }

    btn2 {
      display: block;
      width: 4px;
      height: 100px;
      background: #000000;
      border-radius: 50px 0 0 50px;
      position: absolute;
      left: -17px;
      top: 25%;
    }

    btn3 {
      display: block;
      width: 4px;
      height: 40px;
      background: #000000;
      border-radius: 50px 0 0 50px;
      position: absolute;
      left: -17px;
      top: 15%;
    }
  }
  img{
    width: 101%;
    height: 100%;
    background: rgb(255, 255, 255);
    object-fit: cover;
    border-radius: 50px;
    object-position: 40% 10%;
  }
</style>
