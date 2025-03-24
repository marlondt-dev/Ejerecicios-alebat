<script setup lang="ts">
const props = defineProps({
    iconType: {
        type: String,
        path: String,
    }
});
</script>

<template>
    <div><svg>
            {{ iconType }}
        </svg>
    </div>
</template>