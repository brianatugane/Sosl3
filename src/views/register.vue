<template>
    <div class="flex items-center justify-center bg-green-100 min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold text-green-800 mb-6">{{ $i18n.t('register.title') }}</h2>
            <form class="flex flex-col gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('register.nameLabel') }}</label>
                    <input type="text" :placeholder="$i18n.t('register.namePlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('register.emailLabel') }}</label>
                    <input type="email" :placeholder="$i18n.t('register.emailPlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('register.phoneLabel') }}</label>
                    <input type="tel" :placeholder="$i18n.t('register.phonePlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('register.genderLabel') }}</label>
                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required>
                        <option value="">{{ $i18n.t('register.genderPlaceholder') }}</option>
                        <option value="male">{{ $i18n.t('register.genderMale') }}</option>
                        <option value="female">{{ $i18n.t('register.genderFemale') }}</option>
                        <option value="other">{{ $i18n.t('register.genderOther') }}</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('register.ageLabel') }}</label>
                    <input type="number" min="1" max="150" :placeholder="$i18n.t('register.agePlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('register.passwordLabel') }}</label>
                    <input type="password" :placeholder="$i18n.t('register.passwordPlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">{{ $i18n.t('register.confirmPasswordLabel') }}</label>
                    <input type="password" :placeholder="$i18n.t('register.confirmPasswordPlaceholder')" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" required/>
                </div>
                <button type="submit" class="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">{{ $i18n.t('register.registerButton') }}</button>
            </form>
            <p class="mt-4 text-center text-sm text-gray-600">{{ $i18n.t('register.loginPrompt') }}<router-link to="/login" class="text-green-600 hover:text-green-800 font-semibold"> {{ $i18n.t('register.loginLink') }}</router-link></p>
        </div>
    </div>
</template>

