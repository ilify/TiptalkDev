<script>
  import { ListFilter } from "lucide-svelte";
  import Select from "./select.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Slider } from "$lib/components/ui/slider";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  var price = $state([10000, 1000000]);
  var surface = $state([30, 10000]);
  const Region = [
    { value: "Ariana", label: "Ariana" },
    { value: "Béja", label: "Béja" },
    { value: "Ben Arous", label: "Ben Arous" },
    { value: "Bizerte", label: "Bizerte" },
    { value: "Gabès", label: "Gabès" },
    { value: "Gafsa", label: "Gafsa" },
    { value: "Jendouba", label: "Jendouba" },
    { value: "Kairouan", label: "Kairouan" },
    { value: "Kasserine", label: "Kasserine" },
    { value: "Kébili", label: "Kébili" },
    { value: "Kef", label: "Kef" },
    { value: "Mahdia", label: "Mahdia" },
    { value: "Manouba", label: "Manouba" },
    { value: "Médenine", label: "Médenine" },
    { value: "Monastir", label: "Monastir" },
    { value: "Nabeul", label: "Nabeul" },
    { value: "Sfax", label: "Sfax" },
    { value: "Sidi Bouzid", label: "Sidi Bouzid" },
    { value: "Siliana", label: "Siliana" },
    { value: "Sousse", label: "Sousse" },
    { value: "Tataouine", label: "Tataouine" },
    { value: "Tozeur", label: "Tozeur" },
    { value: "Tunis", label: "Tunis" },
    { value: "Zaghouan", label: "Zaghouan" },
  ];
  const Types = [
    { value: "maison", label: "Maison" },
    { value: "appartement", label: "Appartement" },
    { value: "studio", label: "Studio" },
    { value: "duplex", label: "Duplex" },
    { value: "penthouse", label: "Penthouse" },
  ];
  const Roomnbr = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const Pays = [
    { value: "Tunisie", label: "Tunisie" },
    { value: "France", label: "France" },
    { value: "Italie", label: "Italie" },
    { value: "Espagne", label: "Espagne" },
    { value: "Allemagne", label: "Allemagne" },
  ];
</script>

<main>
  <Select placeholder="Pays" data={Pays} />
  <Select placeholder="Type" data={Types} />
  <Select placeholder="Location" data={Region} />
  <Select placeholder="Nombre de pièces" data={Roomnbr} />
  <DropdownMenu.Root >
    <DropdownMenu.Trigger asChild let:builder>
      <Button builders={[builder]} variant="outline" style="border-radius: 10px; border:1px solid #e4e4e7;color:#5d6e86">Prix</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      style="transform: translateY(10%);border-radius: 10px;"
    >
      <div>
        <info>
          <p>Minimum: {price[0]}</p>
          <p>Maximum: {price[1]}</p>
        </info>

        <Slider bind:value={price} max={1000000} min={10000} step={1000} />
      </div>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  <DropdownMenu.Root >
    <DropdownMenu.Trigger asChild let:builder >
      <Button builders={[builder]} variant="outline" style="border-radius: 10px; border:1px solid #e4e4e7;color:#5d6e86">Surface</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      style="transform: translateY(10%);border-radius: 10px;"
    >
      <div>
        <info>
          <p>Minimum: {surface[0]}</p>
          <p>Maximum: {surface[1]}</p>
        </info>

        <Slider bind:value={surface} max={2000} min={30} step={10} />
      </div>
    </DropdownMenu.Content>
  </DropdownMenu.Root>

  <!-- <button><ListFilter /></button> -->
</main>

<style>
  main {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    align-items: baseline;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
    padding: 30px;
  }

  info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

</style>
