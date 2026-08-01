# ElektroNik Multi-Agent Project Rules

## Grundregeln

- Bewahre Next.js, React und TypeScript.
- Bewahre die Möglichkeit des statischen Exports.
- Bewahre die IONOS-Kompatibilität.
- Bewahre Telefonnummer, E-Mail-Adresse, Adresse und Öffnungszeiten.
- Erfinde keine Unternehmensinformationen.
- Erfinde keine Bewertungen, Zertifikate oder Referenzen.
- Keine Dependency ohne konkrete Begründung.
- Keine Animation ohne Reduced-Motion-Variante.
- Keine externen Bilder ohne dokumentierte Lizenz oder Herkunft.
- Keine Geheimnisse oder Zugangsdaten im Repository.
- Keine unkontrollierten Änderungen auf `main`.
- Fachagenten ändern nur die ihnen ausdrücklich zugewiesenen Dateien; der Lead-Agent konsolidiert Ergebnisse und Konflikte.

## Design

- Zentraler Content-Container ungefähr 1320 Pixel.
- Lesebereiche dürfen schmaler sein.
- Der Hero muss auf Desktop mindestens den sichtbaren Bildschirm ausfüllen.
- Beim initialen Laden darf der Leistungsbereich auf normalen Desktopformaten nicht bereits deutlich sichtbar sein.
- Das Design muss kompakt, hochwertig und ruhig wirken.
- Animationen dürfen Lesbarkeit und Bedienbarkeit nicht beeinträchtigen.
- Kein Gaming-, Krypto- oder Template-Look.

## Animation

- CSS für einfache Übergänge.
- Motion für UI- und Layoutanimationen.
- GSAP nur für komplexe Scrollsequenzen.
- Keine doppelte Steuerung desselben Elements durch Motion und GSAP.
- Animationen bevorzugt über `transform` und `opacity`.
- Mobile Animationen reduzieren.
- `prefers-reduced-motion` vollständig unterstützen.

## Qualität

Vor Abschluss immer ausführen:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `npx playwright test`

Tests mindestens für:

- 375 × 667
- 390 × 844
- 430 × 932
- 768 × 1024
- 1024 × 768
- 1366 × 768
- 1440 × 900
- 1920 × 1080
- 2560 × 1440

## Phasen-Gates

- Phase 1 ist Analyse und Spezifikation; erlaubt sind nur `AGENTS.md` und Dokumente unter `docs/`.
- Produktionscode, Dependencies, Browser-Installationen, Deployment und Git-Veröffentlichung beginnen nur nach ausdrücklicher Freigabe der jeweiligen späteren Phase.
- In Analyseberichten klar zwischen Code-Inspektion, ausgeführten Prüfungen und noch ausstehender Verifikation unterscheiden.
