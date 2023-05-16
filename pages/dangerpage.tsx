import style from "../styles/Dangerpage.module.css";

const DangerPage = () => {
  return (
    <div className={style.body}>
      <div className={style.contents}>
        <h1 className={`${style.alertTitle} ${style.text}`}>
          警告！お使いのパソコンは２０個のウイルスに感染しています。
        </h1>

        <div className={style.outflowInfoArea}>
          <h2 className={`${style.alertText} ${style.text}`}>
            放置すると以下の情報が流失する恐れがあります
          </h2>
          <ul>
            <li className={`${style.outflowList} ${style.text}`}>
              ユーザーIDやパスワードのログイン情報
            </li>
            <li className={`${style.outflowList} ${style.text}`}>
              クレジットカード情報
            </li>
            <li className={`${style.outflowList} ${style.text}`}>
              ブラウザの履歴
            </li>
            <li className={`${style.outflowList} ${style.text}`}>
              住所やメールアドレスなどの個人情報
            </li>
          </ul>

          <p className={`${style.outflowInfo} ${style.text}`}>
            これらのウイルスは、IDおよびクレジットカードの盗難で有名です。このコンピュータまたはネットワーク上のほかのデバイスでさらに操作を行うと、個人情報が明らかになり、重大なリスクが生じる可能性があります。また、制限時間内に対処されなかった場合も同様に、個人情報が漏洩するリスクがあります。修復するには以下の電話番号にご連絡してください。
          </p>

          <p className={`${style.phonenumberText} ${style.text}`}>
            Windowsテクニカルサポート電話番号: <br></br>050 - 1122 - ××××
          </p>
        </div>
      </div>
    </div>
  );
};

export default DangerPage;
