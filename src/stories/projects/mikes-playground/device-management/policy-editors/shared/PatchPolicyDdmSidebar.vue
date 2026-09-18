<script setup lang="ts">
import { LinkText } from '@jumpcloud/circuit/components';
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/vue/24/outline';

const ENROLLMENT_TYPES = [
  { label: 'User-Enrolled', supported: false },
  { label: 'Device-Enrolled', supported: true },
  { label: 'Auto-Enrolled', supported: true },
];
</script>

<template>
  <div class="flex w-full min-w-0 max-w-full flex-col gap-md">
    <div class="p-px">
      <div
        class="flex w-full min-w-0 items-center gap-sm rounded-sm bg-notification-info p-sm shadow-message-info text-notification-info-content"
      >
        <InformationCircleIcon class="size-5 shrink-0 text-notification-info-content" />
        <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-sm gap-y-xs">
          <span class="text-body-md-bold text-neutral-base shrink-0">Requires Supervision</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-w-0 max-w-full shrink items-center gap-0.5 py-xs pl-xs text-body-md-link text-link-base no-underline transition-colors hover:text-link-hover hover:underline hover:underline-offset-2 active:text-link-active active:underline"
          >
            <span class="min-w-0 break-words">Understanding Supervised Devices</span>
            <ArrowRightIcon class="size-5 shrink-0 text-current" />
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-xs w-full">
      <span class="text-body-md-semi-bold text-neutral-base">Other Requirements</span>
      <p class="text-body-md text-neutral-base m-0">
        JumpCloud MDM enrollment
        <LinkText
          href="#"
          target="_blank"
          :showIcon="false"
          customClass="inline-flex items-center gap-xs align-baseline ml-xs"
        >
          Learn more
          <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
        </LinkText>
      </p>
    </div>

    <div class="flex flex-col gap-md">
      <h3 class="text-heading-3 text-neutral-base m-0">macOS</h3>
      <div class="flex flex-col gap-xs w-full">
        <span class="text-body-md-semi-bold text-neutral-base block w-full">
          Minimum Supported Version
        </span>
        <p class="text-body-md text-neutral-base m-0 w-full">macOS 13.0 or later</p>
      </div>
      <div class="flex flex-col gap-sm w-full">
        <span class="text-body-md-semi-bold text-neutral-base">Supported Enrollment Types</span>
        <ul class="flex flex-col gap-sm list-none p-0 m-0">
          <li
            v-for="enrollmentType in ENROLLMENT_TYPES"
            :key="enrollmentType.label"
            class="flex items-start gap-xs"
          >
            <CheckCircleIcon
              v-if="enrollmentType.supported"
              class="size-5 shrink-0 text-success-base mt-0.5"
            />
            <XCircleIcon
              v-else
              class="size-5 shrink-0 text-error-base mt-0.5"
            />
            <span class="text-body-md text-neutral-base">{{ enrollmentType.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
