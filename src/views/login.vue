<template>
    <div class="flex items-center justify-center bg-green-100 min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold text-green-800 mb-6">{{ $i18n.t('login.title') }}</h2>
            <form class="flex flex-col gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('login.emailLabel') }}</label>
                    <input type="email" :placeholder="$i18n.t('login.emailPlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('login.passwordLabel') }}</label>
                    <input type="password" :placeholder="$i18n.t('login.passwordPlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <button type="submit" class="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">{{ $i18n.t('login.loginButton') }}</button>
            </form>
            <p class="mt-4 text-center text-sm text-gray-600">{{ $i18n.t('login.registerPrompt') }}<router-link to="/register" class="text-green-600 hover:text-green-800 font-semibold"> {{ $i18n.t('login.registerLink') }}</router-link></p>
        </div>
    </div>
</template>
