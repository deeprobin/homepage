<script>
  import {
    Form,
    FormGroup,
    Checkbox,
    RadioButtonGroup,
    RadioButton,
    Select,
    SelectItem,
    Button,
    ProgressIndicator,
    ProgressStep,
  } from "carbon-components-svelte";

  let currentIndex = 1;
</script>

<Form on:submit>
  <ProgressIndicator bind:currentIndex>
    <!-- Name, Unternehmen / Auswahl "Privatperson", Job Title/Berufsbezeichnung (nur wenn Unternehmen ausgewählt), Kontaktoptionen (Email, Telefon, Matrix) -->
    <ProgressStep
      complete
      label="persönliche Informationen"
      description="The progress indicator will listen for clicks on the steps"
    />

    <!-- Auswahl des Typs: Auftragsanfrage, Bug/Feature Request, Werbepartnerschaft, rechtliches, Recruiting, ... -->
    <!-- Auftragsanfrage (bei privat) auf Fiverr verweisen -->
    <ProgressStep
      complete
      label="Zielsetzung"
      description="The progress indicator will listen for clicks on the steps"
    />

    <!-- TODO: Label je nach Typ benennen -->
    <!-- (noch nichts ausgewählt): Weitere Informationen -->
    <!-- Auftragsanfrage: Auftragsdetails -->
    <!-- Bug/Feature Request: Problembeschreibung -->
    <!-- rechtliches Problem: Gegenstand ("Gegenstand" hört sich juristischer an :P) -->
    <!-- Recruiting: Jobdetails oder Angebotsdetails? -->
    <ProgressStep
      label="Problembeschreibung"
      description="The progress indicator will listen for clicks on the steps"
    />

    <!-- Datenschutzerklärung akzeptieren, CAPTCHA, ... -->
    <ProgressStep
      label="Überprüfung"
      description="The progress indicator will listen for clicks on the steps"
    />

    <!-- Versand der Bestätigungsmail/SMS; Möglichkeit zu einem PDF-Export -->
    <ProgressStep
      label="Bestätigung"
      description="The progress indicator will listen for clicks on the steps"
    />
  </ProgressIndicator>
  <!--
  <FormGroup legendText="Checkboxes">
    <Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
    <Checkbox id="checkbox-1" labelText="Checkbox Label" />
    <Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
  </FormGroup>
  <FormGroup legendText="Radio buttons">
    <RadioButtonGroup name="radio-button-group" selected="default-selected">
      <RadioButton
        id="radio-1"
        value="standard"
        labelText="Standard Radio Button"
      />
      <RadioButton
        id="radio-2"
        value="default-selected"
        labelText="Default Selected Radio Button"
      />
      <RadioButton
        id="radio-4"
        value="disabled"
        labelText="Disabled Radio Button"
        disabled
      />
    </RadioButtonGroup>
  </FormGroup>
  <FormGroup>
    <Select id="select-1" labelText="Select menu" value="placeholder-item">
      <SelectItem
        disabled
        hidden
        value="placeholder-item"
        text="Choose an option"
      />
      <SelectItem value="option-1" text="Option 1" />
      <SelectItem value="option-2" text="Option 2" />
      <SelectItem value="option-3" text="Option 3" />
    </Select>
  </FormGroup>
  <Button type="submit">Submit</Button>-->
</Form>
