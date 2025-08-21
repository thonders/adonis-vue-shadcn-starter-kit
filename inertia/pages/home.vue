<script setup lang="ts">
import { computed } from 'vue'
import { Head, Link } from '@inertiajs/vue3'
import { Zap, Layout, Heart } from 'lucide-vue-next'
import App from '@/layouts/app.vue'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Auth {
  user: {
    id: number
    fullName: string
    email: string
  } | null
}

const props = defineProps<{ auth: Auth }>()

const isAuthenticated = computed(() => props.auth.user !== null)
</script>

<template>
  <Head title="Home" />

  <App>
    <div class="min-h-screen bg-background">
      <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center py-20">
          <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Start Creating Your
              <span class="text-primary">Application!</span>
            </h1>

            <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
              Welcome to your AdonisJS application with Vue 3, Inertia.js, and Shadcn UI. Everything
              is set up and ready for you to build something amazing.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <template v-if="!isAuthenticated">
                <Link href="/register">
                  <Button size="lg" class="w-full sm:w-auto"> Create an Account </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" class="w-full sm:w-auto"> Sign In </Button>
                </Link>
              </template>
              <template v-else>
                <Card class="w-full max-w-md">
                  <CardHeader>
                    <CardTitle class="text-xl">Welcome back!</CardTitle>
                    <CardDescription>
                      Hello {{ props.auth.user?.fullName }}, you're all set to start building.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </template>
            </div>

            <div class="grid md:grid-cols-3 gap-6 mt-16">
              <Card>
                <CardHeader>
                  <div
                    class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto"
                  >
                    <Zap class="size-6" />
                  </div>
                  <CardTitle class="text-lg">AdonisJS Backend</CardTitle>
                  <CardDescription>
                    Powerful Node.js framework with TypeScript support and excellent developer
                    experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div
                    class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto"
                  >
                    <Layout class="size-6" />
                  </div>
                  <CardTitle class="text-lg">Vue 3 Frontend</CardTitle>
                  <CardDescription>
                    Modern reactive frontend framework with Composition API and excellent TypeScript
                    integration.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div
                    class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto"
                  >
                    <Heart class="size-6" />
                  </div>
                  <CardTitle class="text-lg">Shadcn UI</CardTitle>
                  <CardDescription>
                    Beautiful, accessible UI components built with Tailwind CSS and Reka UI
                    primitives.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  </App>
</template>
