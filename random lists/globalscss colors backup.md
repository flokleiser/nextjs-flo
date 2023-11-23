:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

    /*TITLE COLOR*/
  --foreground-rgb: 50, 50, 50;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;

  --card-font-rgb: 255, 255, 255;

  --primary-glow: conic-gradient(
    from 180deg at 50% 50%,
    #A63C9F 0deg,
    #850FA6 55deg,
    #58088C 120deg,
    #3E0973 160deg,
    transparent 360deg
  );

  /* for the font */
  --secondary-glow: radial-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );

  /* --primary-glow: conic-gradient(
    from 180deg at 50% 50%,
    #A63C9F 0deg,
    #850FA6 55deg,
    #58088C 120deg,
    #3E0973 160deg,
    transparent 360deg
  );

  --secondary-glow: radial-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  ); */

  --callout-rgb: 238, 240, 241;
  --callout-border-rgb: 172, 175, 176;
  --card-rgb: 225, 225, 225;
  --card-border-rgb: 131, 134, 135;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* BACKGROUND */
    
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 70, 70, 70;
    --background-end-rgb: 40, 40, 40;

    --card-font-rgb: 255, 255, 255;

    --primary-glow: radial-gradient(
      #A63C9F ,
      #850FA6 ,
      #58088C ,
      #3E0973 );
      
      --secondary-glow: linear-gradient(
      to bottom right,
      #3E0973,
      #58088C
      #850FA6, 
    );

    /* --primary-glow: radial-gradient(
      #A63C9F,
      #180540);
      
      --secondary-glow: linear-gradient(
      to bottom right,
      #3E0973,
      #58088C
      #850FA6, 
    ); */


    --callout-rgb: 20, 20, 20;
    --callout-border-rgb: 108, 108, 108;
    --card-rgb: 200, 200, 200;
    --card-border-rgb: 255, 255, 255;
  }
}