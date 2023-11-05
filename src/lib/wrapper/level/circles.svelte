<script lang="ts">
    export let x = 0;
    export let color : string;
    export let mastery : string;
    let circumference = 40*2*Math.PI;
</script>

<div class="relative w-15 h-15">
    <svg class="w-full h-full" viewBox="0 0 100 100">
      <!-- Background circle -->
      <circle
        class="text-gray-200 stroke-current"
        stroke-width="10"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      <!-- Progress circle -->
      <circle
        class="{color} stroke-current"
        stroke-width="10"
        stroke-dasharray="{circumference + " " +circumference}"
        stroke-dashoffset="{circumference - x / 100 * circumference}"
        stroke-linecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      
      <!-- Center text -->
      <text x="50" y="55" font-family="Inter" font-size="12" text-anchor="middle" alignment-baseline="middle">Lvl {mastery}</text>
  
    </svg>
  </div>