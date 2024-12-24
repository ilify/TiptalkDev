<script>
  import * as Select from "$lib/components/ui/select";
  export var { placeholder, data } = $props();
  // export let data;
</script>

<Select.Root>
  <Select.Trigger
    class="w-[180px] "
    style="border:1px solid #e4e4e7;border-radius:10px;"
  >
    <Select.Value {placeholder} />
  </Select.Trigger>
  <Select.Content>
    <Select.Group class="h-fit max-h-[300px] overflow-y-auto">
      {#each data as r}
        <Select.Item value={r.value} label={r.label}>{r.label}</Select.Item>
      {/each}
    </Select.Group>
  </Select.Content>
</Select.Root>
