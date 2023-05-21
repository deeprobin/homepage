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
    FluidForm,
    TextInput,
    ButtonSet,
  } from "carbon-components-svelte";
  import {
    Book,
    DataClass,
    Person,
    Promote,
    TextAlignJustify,
    Wallet,
  } from "carbon-icons-svelte";

  let currentIndex = 1;

  let selectedLegalEntity = "individual";
</script>

<Form on:submit>
  <ProgressIndicator bind:currentIndex>
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

  {#if currentIndex === 0}
    <FormGroup legendText="persönliche Informationen">
      <FluidForm>
        <TextInput
          labelText="Name"
          placeholder="Wie darf ich Sie ansprechen?"
          required
        />
      </FluidForm>
      <RadioButtonGroup
        legendText="Sie sind ..."
        bind:selected={selectedLegalEntity}
      >
        <RadioButton labelText="Privatperson" value="individual" />
        <RadioButton labelText="Unternehmen" value="company" />
      </RadioButtonGroup>
    </FormGroup>
    {#if selectedLegalEntity == "company"}
      <FormGroup legendText="Unternehmen">
        <FluidForm>
          <TextInput
            labelText="Unternehmen"
            placeholder="In welchem Unternehmen sind Sie tätig?"
          />
          <TextInput labelText="Position" placeholder="In welcher Position?" />
        </FluidForm>
      </FormGroup>
    {/if}
    <FormGroup legendText="Kontakt">
      <FluidForm>
        <TextInput
          labelText="Mail"
          placeholder="Unter welcher Mail-Adresse darf ich Ihnen antworten?"
        />
        <TextInput
          labelText="Matrix"
          placeholder="Alternativ kann ich Sie über Matrix kontaktieren"
        />
        <TextInput
          labelText="Telefon"
          placeholder="Oder Old-School, telefonisch!"
        />
      </FluidForm>
    </FormGroup>
  {:else if currentIndex === 1}
    <ButtonSet stacked>
      <Button icon={Wallet}>Auftragsanfrage</Button>
      <Button icon={DataClass}>Bug / Feature Request</Button>
      <Button icon={Promote}>Werbepartnerschaft</Button>
      <Button icon={Book}>rechtliche Belange</Button>
      <Button icon={Person}>Recruiting</Button>
      <Button icon={TextAlignJustify}>Anderes</Button>
    </ButtonSet>
  {/if}
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
