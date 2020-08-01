<template>
  <div class="legal-details">
    <div class="container">
      <h1>Impressum</h1>

      <h2>Angaben gemäß <a href="https://www.gesetze-im-internet.de/tmg/__5.html">§ 5 TMG</a></h2>
      <p>
        Robin Lindner
        <br />Holzbronn 12
        <br />97999 Igersheim
      </p>

      <h2>Kontakt</h2>
      <p>
          E-Mail: robin@deeprobin.de
      </p>

      <h3>Haftung für Inhalte</h3>
      <p>Als Diensteanbieter sind wir gemäß <a href="https://www.gesetze-im-internet.de/tmg/__7.html">§ 7 Abs.1 TMG</a> für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach <a href="https://www.gesetze-im-internet.de/tmg/index.html">§§ 8 bis 10 TMG</a> sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
      
      <h3>Haftung für Links</h3>
      <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewahr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
      <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      
      <h3>Urheberrecht</h3>
      <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Seitenbetreibers sowie des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch gestattet.</p>
      <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.legal-details {
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  .container {
    padding: 12px;
    text-align: left;
    width: 90vw;
    max-height: 75vh;
    background-color: rgba(236, 240, 241, 0.8);
    color: black;
    border-radius: 2px;
    overflow: auto;
  }
}
</style>