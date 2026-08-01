# ElektroNik Motion- und Interaction-Spezifikation

## Status und Geltungsbereich

Diese Spezifikation ist das Ergebnis von Phase 1. Sie dokumentiert den realen Bestand und definiert die Motion-Richtung für die spätere Umsetzung. Sie verändert keine Layoutentscheidung und autorisiert weder Produktionscode noch neue Dependencies.

Motion soll Präzision, Energie und technische Zuverlässigkeit vermitteln. Sie strukturiert Inhalte, bestätigt Eingaben und erklärt Zusammenhänge. Sie ist kein eigenständiges Spektakel. Inhalte und Kontaktwege bleiben zu jedem Zeitpunkt verfügbar.

## Reale Bestandsaufnahme

### Technischer Bestand

- Das Projekt verwendet Next.js 16, React 19 und TypeScript.
- `motion`, `gsap` und `@playwright/test` sind derzeit nicht installiert. Phase 1 installiert nichts.
- `app/page.tsx` ist überwiegend eine Server Component. Nur Header, FAQ und WhatsApp-Formular sind Client Components.
- `app/components/site-header.tsx` steuert Headerzustand, Mobile-Menü und aktive Navigation mit React-State, einem passiven Scroll-Listener, `matchMedia` und `IntersectionObserver`. Listener und Observer werden bereits korrekt entfernt.
- Das Mobile-Menü sperrt den Body-Scroll, schließt mit Escape und gibt den Fokus an den Menübutton zurück. Beim Wechsel auf Desktop wird es geschlossen.
- `app/components/faq-list.tsx` steuert ein einzelnes offenes FAQ per React-State. Höhe und Opazität werden in CSS animiert.
- `app/globals.css` enthält alle aktuellen Animationen und Übergänge. Es gibt keine JavaScript-Timeline und keinen globalen Smooth-Scroll.

### Vorhandene Bewegung

| Element | Bestand | Bewertung |
| --- | --- | --- |
| Header | Farb-, Border- und Shadow-Transition bei mehr als 24 px Scroll | funktional, ruhig; `backdrop-filter` sollte auf schwächeren Geräten beobachtet werden |
| Navigation | Active-Unterstreichung über `scaleX`; Active-State via `IntersectionObserver` | sinnvoll; Observer-Zone kann bei kurzen Sections sprunghaft wirken |
| Mobile-Menü | wird per `display: none/flex` sofort ein-/ausgeblendet; Burgerlinien rotieren | funktional, aber kein räumlich zusammenhängender Menüübergang |
| Buttons/Links | meist `translateY(-2px)`, Farb- und Borderwechsel | angemessen; Hover darf auf Touch nicht als Konzept vorausgesetzt werden |
| Hero-Orbit | ein Ring rotiert permanent über 42 s | zurückhaltend, aber dauerhaft und rein dekorativ |
| Hero-Blitz | permanente Scale-/Glow-Pulse alle 3,6 s | lenkt wiederholt Aufmerksamkeit auf Dekoration; für Premium-Ruhe reduzieren |
| Hero-Chips | Hover/Focus um 3 px nach oben | grundsätzlich passend; Focus darf keine ungewollte Layout- oder Lesereaktion erzeugen |
| Scroll-Cue | statisch | unproblematisch |
| Leistungs-Karten | vollständiger Dunkelmodus-Wechsel, Schatten und 3 px Lift | klar, aber visuell stark; Fokus-/Touch-Zustände müssen gleichwertig sein |
| Prozess | Fortschritt wird ausschließlich durch Hover/Focus und `:has()` gesteuert | entdeckt den Ablauf nicht beim Scrollen; auf Touch kaum selbsterklärend; `:focus` statt ausschließlich `:focus-visible` kann unerwartet aktiv bleiben |
| FAQ | `grid-template-rows` und Opazität, 220–260 ms; Icon dreht | ruhig und verständlich; semantische Ausblendung/Fokusierbarkeit bei künftigen Rich-Content-Antworten beachten |
| Formularziel | 1,2-s-Highlight über Box-Shadow | nützliche Zielbestätigung, aber Glow und Repaint-Fläche begrenzen |
| Reduced Motion | globale Dauer von Animationen/Transitions wird auf 0,01 ms gesetzt; Smooth Scroll deaktiviert | gute Basis, aber nur technische Verkürzung; spätere JS-Animationen brauchen eine explizite statische Variante |

### Risiken und offene Punkte

- Mehrere dekorative Daueranimationen im Hero konkurrieren mit dem eigentlichen CTA. Künftig maximal ein langsam bewegter Orbit und ein einmaliger Energieimpuls.
- Eine spätere Hero-Timeline darf nicht zu einem großen Client-Wrapper für die gesamte Seite führen. Client-Grenzen bleiben klein.
- CSS, Motion und GSAP dürfen nie dieselbe `transform`- oder `opacity`-Eigenschaft desselben Elements besitzen. Sonst entstehen Überschreibungen, Sprünge und schwer testbare Zustände.
- Scroll-Animationen müssen auf dynamische Viewport-Höhen, Headerhöhe und Resize reagieren. Fest codierte Pixel-Trigger sind zu vermeiden.
- Hover-Logik des Prozesses ist auf Touch kein belastbares Interaktionsmodell. Die spätere Scrollprogression ist informativ; alle Schritte bleiben unabhängig davon sichtbar.
- `overflow-x: clip` kann Überbreiten optisch verstecken. Motion darf keine Elemente außerhalb der sicheren Fläche positionieren und soll nicht als Ersatz für Responsive-Korrektheit dienen.
- Dauernde Scroll-State-Updates am Header sind aktuell klein, sollten aber nicht mit zusätzlichen ungedrosselten Pointer- oder Scroll-Handlern ergänzt werden.
- Parallax oder Pointer-Reaktion darf nicht auf Touch, bei grobem Pointer oder bei Reduced Motion laufen.
- `backdrop-filter`, große Glows und animierte Box-Shadows können Repaint-Kosten verursachen. Bevorzugt werden `transform` und `opacity`.

## Bewegungsprinzipien

1. **Orientierung vor Dekoration:** Motion erklärt Kapitelwechsel, Zustände und Prozessfortschritt.
2. **Ein primärer Impuls:** Im Hero gibt es nur eine dominante Energiebewegung. Andere Elemente ordnen sich unter.
3. **Kurze Reaktion, ruhiger Aufenthalt:** UI-Feedback dauert in der Regel 140–240 ms; Inhalte stehen danach still.
4. **Keine Zugangsschranke:** Initiale Inhalte sind im DOM und ohne Animation lesbar. Eine Timeline blockiert weder CTA noch Scrollen.
5. **Konsistente Richtung:** Reveals bewegen sich bevorzugt 12–24 px vertikal, nicht aus großen Offscreen-Distanzen.
6. **Keine Layoutanimation:** Keine Animation von `top`, `left`, `width` oder `height`, wenn `transform`, Clip/Mask oder ein CSS-Grid-Übergang denselben Zweck performant erfüllen.
7. **Progressive Enhancement:** Bei fehlendem JavaScript, fehlender API-Unterstützung oder Reduced Motion ist die vollständige statische Seite der gültige Endzustand.

## Technische Zuständigkeit

### CSS

CSS besitzt:

- Hover-, Focus- und Pressed-Zustände;
- Farb-, Border- und leichte Transform-Übergänge;
- Burger-Icon-Morph;
- einfache FAQ-Details, sofern die bestehende React-State-Lösung beibehalten wird;
- Header-Farbwechsel nach gesetzter Zustandsklasse;
- sichtbare Fokuszustände;
- Reduced-Motion-Fallbacks;
- den optionalen, sehr langsamen Orbit-Loop.

Richtwerte: 140–180 ms für Farb-/Iconfeedback, 180–240 ms für kleine Transforms, 240–320 ms für ein Menü oder Akkordeon. Hover-Lift maximal 2–4 px, Skalierung maximal 1,01–1,02.

### Motion for React

Motion besitzt nach Freigabe und Installation:

- Section- und Karten-Reveals beim ersten Eintritt in den Viewport;
- Mobile-Menü-Panel und gestaffelte Menüpunkte, sofern eine saubere Exit-Animation erforderlich ist;
- kleine Layout-/Presence-Übergänge des FAQ, wenn die CSS-Lösung nicht ausreicht;
- nicht gepinnte, kurze UI-Sequenzen.

Standard-Reveal: `opacity: 0 -> 1`, `y: 18 -> 0`, 420–560 ms, Ease `[0.22, 1, 0.36, 1]`. Stagger 50–80 ms, maximal sechs Elemente pro Gruppe. `once: true`; Trigger ungefähr bei 15–20 % Sichtbarkeit. Überschriften, Fließtext und CTA dürfen gemeinsam gruppiert werden, jedoch mit maximal 240 ms Abstand zwischen erstem und letztem Element.

### GSAP und ScrollTrigger

GSAP ist nach Freigabe ausschließlich zulässig für:

- die einmalige Hero-Intro-Timeline;
- den SVG-Energiepfad beziehungsweise einen präzisen Impuls im Hero;
- einen begründeten Hero-zu-Leistungen-Übergang;
- die scrollgekoppelte Prozesslinie.

Kein globaler Smooth Scroll, kein flächendeckendes ScrollTrigger-Netz und kein Pinning langer Inhaltsbereiche. Wenn eine Sequenz mit CSS oder Motion klar lösbar ist, wird GSAP nicht eingesetzt.

## Vorgesehene Sequenzen

### Hero-Intro

Gesamtdauer maximal 1,5 s; beginnt nach Hydration, ohne auf Assets zu warten. Der lesbare Grundzustand darf nicht länger als einen Frame verborgen sein.

| Zeitpunkt | Aktion | Dauer |
| --- | --- | --- |
| 0 ms | Eyebrow und Headline erscheinen aus 16 px mit Opazität | 500 ms |
| 120 ms | Lead-Text erscheint | 480 ms |
| 260 ms | Blitz lädt einmalig auf; SVG-/Pseudo-Pfad wird sichtbar | 420 ms |
| 420 ms | ein Energieimpuls läuft einmal durch den Orbit | 600–700 ms |
| 480 ms | sechs Leistungsfelder erscheinen symmetrisch in drei Paaren | je 360 ms, 70 ms Stagger |
| 700 ms | CTAs und Trust-Zeile erscheinen | 420 ms |
| 1050 ms | Scroll-Indikator erscheint; Timeline endet ruhig | 300 ms |

Danach bleibt nur optional ein Orbit mit 48–60 s linearer Rotation aktiv. Kein permanentes Pulsen des Blitzes, kein Schweben aller Chips. Ein erneutes Intro bei interner Hash-Navigation oder BFCache-Rückkehr ist zu vermeiden.

### Pointer-Reaktion des Hero-Visuals

- Nur bei `(hover: hover) and (pointer: fine)` und einer sinnvollen Mindestbreite, Richtwert 1100 px.
- Maximal 4–6 px Translation und 1–1,5 Grad Rotation bezogen auf den Mittelpunkt.
- Werte über `requestAnimationFrame` bündeln; nicht bei jedem Pointerevent React-State setzen.
- Bei `pointerleave`, Tab-Wechsel und Unmount neutralisieren.
- Auf Touch, grobem Pointer, Mobile/Tablet und Reduced Motion vollständig deaktivieren.

### Header und Mobile-Menü

- Header-Farbwechsel: 180–220 ms; keine Höhenänderung, damit kein Layout Shift entsteht.
- Menü-Overlay: Opazität 0 -> 1 und `y: -8 -> 0`, 240–300 ms. Menüpunkte optional 40–50 ms gestaffelt; Gesamterscheinung unter 500 ms.
- Schließen leicht kürzer, 180–220 ms. Escape, Linkauswahl und Breakpoint-Wechsel müssen dieselbe Exit-/Cleanup-Logik nutzen.
- Fokusmanagement, Scroll-Lock und Fokusfalle sind funktionale Anforderungen und unabhängig von Motion zu implementieren. Nach Schließen Fokus zurück zum Auslöser; bei Öffnen Fokus sinnvoll in das Menü bewegen.

### Übergang zu Leistungen

- Kein schräger, hektischer Ticker. Kompetenzleiste statisch oder extrem langsam.
- Der Kapitelwechsel kann durch eine vertikale technische Linie beziehungsweise einen einmaligen Impuls bestätigt werden.
- Trigger: wenn die Trennzone etwa 70–75 % der Viewport-Höhe erreicht. Dauer 500–700 ms, einmalig.
- Die Leistungssektion darf beim initialen Desktop-Viewport nicht deutlich sichtbar sein; dies ist eine Layout-, nicht Motion-Aufgabe.

### Leistungskarten

- Viewport-Reveal je sichtbarer Reihe, 480–560 ms, Stagger 60–80 ms, einmalig.
- Hover/Focus: maximal `translateY(-3px)`, 180–220 ms; kein starkes Scale-Up.
- Auf Touch kein simuliertes Hover-Erlebnis erforderlich. Karten und CTA funktionieren statisch vollständig.
- Der starke Wechsel zu dunklem Hintergrund ist visuell zu prüfen; Motion darf die Lesbarkeit während des Farbübergangs nicht reduzieren.

### Warum ElektroNik

- Copy und Bildfläche können unabhängig, aber innerhalb von maximal 160 ms nacheinander erscheinen.
- Kein Parallax auf dem späteren Kundenfoto als Standard. Falls überhaupt eingesetzt: höchstens 2 % Bildverschiebung, Desktop-only, ohne sichtbare Crop-Kante.
- Vertrauenspunkte erscheinen einmalig mit 60 ms Stagger. Danach statisch.

### Prozess

- Desktop: ScrollTrigger steuert ausschließlich den Fortschritt einer separaten Linie über `scaleX` mit Ursprung links. Trigger startet, wenn der Track bei etwa 70 % Viewport-Höhe eintritt, und endet, wenn sein Ende etwa 45 % erreicht.
- Jeder Schritt erhält beim Erreichen eine Zustandsklasse; Punkt und Text wechseln in 180–240 ms. Keine Inhalte werden verborgen.
- Tablet und Mobile: vertikale Linie mit `scaleY`, Ursprung oben; falls die zweispaltige Tablet-Anordnung erhalten bleibt, keine irreführende horizontale Verbindung erzwingen.
- Hover/Focus kann einen Schritt zusätzlich hervorheben, darf den tatsächlichen Scrollfortschritt aber nicht überschreiben.
- Reduced Motion: Linie und alle Schritte vollständig aktiv/statisch, keine Scrollkopplung.

### FAQ

- Öffnen 240–280 ms, Schließen 180–240 ms; Iconrotation 180 ms.
- Nur eine Antwort bleibt wie im Bestand geöffnet, sofern UX keine Mehrfachöffnung freigibt.
- Bei Reduced Motion sofortiger Zustandswechsel. `aria-expanded`, `aria-controls` und Region-Zuordnung bleiben synchron.
- Inhalt darf während der Animation nicht fokussierbar sein, wenn er visuell geschlossen ist. Bei heutigen reinen Textantworten besteht kein Fokusrisiko; bei späteren Links muss `hidden`/Presence korrekt behandelt werden.

### Kontakt und Formular

- Kontaktoptionen erhalten nur Farb-/Borderfeedback, 160–200 ms.
- Hash-Sprung zum WhatsApp-Formular darf einmalig über Border/Outline bestätigt werden; keine großflächige animierte Box-Shadow. 600–900 ms genügen.
- Validierungs- und Statusmeldungen erscheinen sofort oder mit maximal 160 ms Opazitätsübergang. Keine verzögerte Rückmeldung.
- Floating Mobile Actions bleiben statisch; höchstens Pressed-Feedback. Sie dürfen nicht pulsieren.

## Responsive-, Touch- und Geräteverhalten

- Ab 1101 px darf das Desktop-Motion-Konzept gelten; Pointer-Effekte zusätzlich nur bei Fine Pointer/Hover.
- Zwischen 761 und 1100 px werden Stagger reduziert, Pointer-Parallax deaktiviert und Scrollsequenzen vereinfacht.
- Bis 760 px werden Distanzen auf 8–14 px, Dauern um etwa 20 % und Stagger auf 30–50 ms reduziert. Keine gepinnten Sections, keine horizontal vorausgesetzten Prozesspfade.
- Bei kurzer Landscape-Höhe, insbesondere 1024 x 768, keine Hero-Sequenz an eine Mindesthöhe von 900 px koppeln. Trigger müssen viewportrelativ und nach Resize neu berechnet werden.
- `touchstart` wird nicht zur künstlichen Aktivierung von Hoverzuständen verwendet. `pointerup`/Click liefert direktes Feedback.
- Animation darf niemals horizontale Überbreite erzeugen. Ausgangszustände liegen innerhalb des eigenen Containers.

## Reduced Motion

`prefers-reduced-motion: reduce` ist ein eigener Designzustand, nicht nur eine Beschleunigung auf 0,01 ms.

- Alle Inhalte, Chips, Karten, Linien und CTAs werden sofort in ihrem finalen sichtbaren Zustand gerendert.
- Kein Hero-Intro, Orbit, Energieimpuls, Pointer-Parallax, Parallax, Scroll-Scrub oder Stagger.
- Kein Smooth Scroll. Hash-Navigation springt direkt mit korrektem Header-Offset.
- Headerzustand, Menü, FAQ, Formfeedback und aktive Navigation funktionieren weiterhin; Zustandswechsel erfolgen unmittelbar.
- Motion-Komponenten lesen die Medienabfrage über die Bibliotheks-API beziehungsweise `matchMedia`; GSAP wird innerhalb eines passenden Media-Kontexts gar nicht erst initialisiert.
- Die bestehende globale CSS-Regel bleibt als Sicherheitsnetz, wird aber durch explizite statische Endzustände ergänzt.
- Änderungen der OS-Einstellung während einer Sitzung müssen berücksichtigt werden: laufende Timelines abbrechen, Styles bereinigen und Endzustand setzen.

## Lifecycle, Cleanup und Performance

- GSAP ausschließlich in lokaler Client Component mit `gsap.context`; bei Unmount `revert()` und alle ScrollTrigger der Komponente entfernen.
- `ScrollTrigger.matchMedia` beziehungsweise ein gleichwertiger Media-Kontext trennt Desktop, Mobile und Reduced Motion. Nach Font-/Bildlayout und relevanten Breakpointwechseln kontrolliert refreshen, nicht permanent.
- Motion-Observer laufen `once`, wo Wiederholung keinen funktionalen Nutzen hat.
- Native Listener immer passiv, soweit kein `preventDefault` nötig ist; Listener, `matchMedia`, `IntersectionObserver` und `requestAnimationFrame` beim Unmount entfernen.
- Pointerwerte nicht in React-State schreiben. CSS Custom Properties oder imperative Motion Values nutzen.
- Bevorzugt `transform` und `opacity`; animierte Filter, Blur, große Schatten und Masken nur nach realer Performance-Prüfung.
- `will-change` nur kurzzeitig an tatsächlich animierten Elementen, nicht global.
- Keine Animation wartet auf Netzwerkressourcen. Bei verzögerten Bildern bleibt der stabile statische Layoutplatz bestehen.
- Ein Element hat genau einen Transform-Owner. Falls CSS-Hover und GSAP dasselbe sichtbare Objekt betreffen, werden verschachtelte Wrapper mit klar getrennter Zuständigkeit verwendet.

## Abnahmekriterien für spätere Phasen

- Das Hero-Intro ist nach spätestens 1,5 s beendet; Text und CTA sind spätestens nach 800 ms les- und bedienbar.
- Nach dem Intro läuft höchstens eine subtile Daueranimation im Hero.
- Keine doppelte Steuerung eines Elements durch CSS, Motion und GSAP.
- Keine Animation erzeugt Layout Shift, horizontale Überbreite oder abgeschnittene Inhalte.
- Mobile und Touch funktionieren ohne Hover und ohne Pointer-Parallax vollständig.
- Reduced Motion zeigt unmittelbar den vollständigen Endzustand und enthält keine Scrollkopplung oder Dauerbewegung.
- Escape, Menü-Link, Breakpointwechsel und Unmount räumen Scroll-Lock, Fokus und Listener zuverlässig auf.
- Prozessschritte sind immer lesbar; die Linie ist Zusatzinformation und auf Mobile semantisch korrekt vertikal oder statisch.
- FAQ-Zustand und ARIA-Angaben bleiben während Öffnen und Schließen synchron.
- Animationen laufen bei den definierten Viewports 375 x 667, 390 x 844, 430 x 932, 768 x 1024, 1024 x 768, 1366 x 768, 1440 x 900, 1920 x 1080 und 2560 x 1440 ohne Überlagerungen.
- Keine merkbaren Main-Thread-Spitzen durch Pointer- oder Scrollhandler; visuelle Prüfung auf einem schwächeren Mobilgerät beziehungsweise CPU-Throttling ist Teil der QA.
- Die Seite bleibt ohne JavaScript in sinnvoller Reihenfolge lesbar; Kontaktlinks funktionieren unabhängig von Motion.

## Entscheidungspunkte vor Phase 2

1. Visuelle Freigabe für den einmaligen Energieimpuls und maximal einen langsamen Orbit.
2. Entscheidung, ob der Mobile-Menü-Übergang CSS genügt oder Motion für Presence benötigt.
3. Entscheidung, ob der Prozess auf Tablet zweispaltig bleibt; erst danach wird die korrekte Linienführung festgelegt.
4. Bestätigung, dass keine Bild-Parallax als Kernbestandteil verlangt wird.
5. Dependencies erst in der freigegebenen Phase 2 prüfen und nur fehlende Pakete begründet installieren.
