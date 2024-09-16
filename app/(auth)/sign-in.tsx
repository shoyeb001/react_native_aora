import { SafeAreaView } from "react-native-safe-area-context";
import { Text, ScrollView, View, Image } from "react-native";
import { images } from "@/constants";
import FormFeild from "@/components/FormFeild";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }
    return (
        <>
            <SafeAreaView className="bg-primary h-full ">
                <ScrollView>
                    <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                        <Image
                            source={images.logo}
                            resizeMode="contain"
                            className="w-[115px] h-[34px]"
                        />
                        <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Login in to Aora</Text>
                        <FormFeild title="Email" value={form.email} handelChangeText={(e: any) => setForm({ ...form, email: e })} otherStyles="mt-7" keyboardType="email-address" />
                        <FormFeild title="password" value={form.password} handelChangeText={(e: any) => setForm({ ...form, password: e })} otherStyles="mt-7" />
                        <CustomButton
                            title="Sign In"
                            handlePress={submit}
                            containerStyles="mt-7"
                            isLoading={isSubmitting}
                            textStyles=""
                        />
                        <View className="flex justify-center pt-5 flex-row gap-2">
                            <Text className="text-lg text-gray-100 font-pregular">
                                Don't have an account?
                            </Text>
                            <Link
                                href="/sign-up"
                                className="text-lg font-psemibold text-secondary"
                            >
                                Signup
                            </Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>

    )
}

export default SignIn;