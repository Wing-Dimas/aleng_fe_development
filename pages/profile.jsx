import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import Skeleton from "react-loading-skeleton"
import toast from "react-hot-toast"
import { useBreakpoint } from "use-breakpoint"
import Navbar from "@components/molecules/Navbar"
import Button from "@components/atomics/Button"
import Container from "@components/atomics/Container"
import DateInput from "@components/atomics/DateInput"
import FABSheet from "@components/atomics/FABSheet"
import Footer from "@components/molecules/Footer"
import Heading from "@components/atomics/Heading"
import MainContent from "@components/atomics/MainContent"
import Select from "@components/atomics/Select"
import Text from "@components/atomics/Text"
import TextInput from "@components/atomics/TextInput"
import Wrapper from "@components/atomics/Wrapper"
import { BREAKPOINTS } from "@constants/index"
import {
  IconChevronLeft,
  IconLock,
  IconSettings,
  IconUpload,
  IconUser,
} from "@tabler/icons-react"
import { UserContext } from "@utils/useUser"
import withAuth from "@utils/withAuth"
import validateResetPassword from "@validators/resetPasswordValidator"

const ProfilePage = () => {
  const { breakpoint, _, __ } = useBreakpoint(BREAKPOINTS, "xs")
  const router = useRouter()
  const user = useContext(UserContext)
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [profile, setProfile] = useState({
    foto: null,
    nama: "",
    jenis_kelamin: "",
    alamat: "",
    no_hp: "",
    tanggal_lahir: "",
  })
  const [displayProfile, setDisplayProfile] = useState({
    nama: "",
    email: "",
    foto: "",
    new_foto_url: "",
  })

  const [secret, setSecret] = useState({
    password: "",
    password_confirmation: "",
  })

  const doChangeProfile = ({ name, value }) => {
    setProfile({ ...profile, [name]: value })
  }

  const doChangePhoto = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setProfile({ ...profile, foto: selectedFile })
      const objectURL = URL.createObjectURL(selectedFile)
      setDisplayProfile({ ...displayProfile, new_foto_url: objectURL })
    }
  }

  const doChangePassword = ({ name, value }) => {
    setSecret({ ...secret, [name]: value })
  }

  const doUpdateProfile = async () => {
    if (isUpdating) return
    const loadingToast = toast.loading("Mengubah profile...")
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    try {
      const formData = new FormData()
      for (const key in profile) {
        if (profile.hasOwnProperty(key)) {
          const value = profile[key]
          if (value !== null && value !== undefined && value !== "") {
            formData.append(key, value)
          }
        }
      }
      setIsUpdating(true)
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_BASE_API + "/auth/user/edit-profile",
        formData,
        config
      )
      setIsUpdating(false)
      toast.success("Berhasil mengubah profil", { id: loadingToast })
      getUserData()
    } catch (error) {
      setIsUpdating(false)
      toast.error("Gagal mengubah profil\nCoba ulangi lagi", {
        id: loadingToast,
      })
    }
  }

  const doUpdatePassword = async () => {
    if (isUpdating) return
    const loadingToast = toast.loading("Mengubah password...")
    const validated = await validateResetPassword(secret)
    if (validated.isError) {
      toast.error("Password tidak sama\nPastikan passwordmu sama ya", {
        id: loadingToast,
      })
      return
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    try {
      setIsUpdating(true)
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_BASE_API + "/auth/user/change-password",
        secret,
        config
      )
      toast.success("Berhasil mengubah password", { id: loadingToast })
      setTimeout(() => {
        setIsUpdating(false)
        doLogout()
      }, 1000)
    } catch (error) {
      setIsUpdating(false)
      toast.error("Gagal mengubah password\nCoba ulangi lagi", {
        id: loadingToast,
      })
    }
  }

  const getUserData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    try {
      setIsLoading(true)
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_API + "/auth/user/profile",
        config
      )
      setProfile({
        foto: data.data.profile.foto,
        nama: data.data.profile.nama,
        jenis_kelamin: data.data.profile.jenis_kelamin,
        alamat: data.data.profile.alamat,
        no_hp: data.data.profile.no_hp,
        tanggal_lahir: data.data.profile.tanggal_lahir,
      })
      setDisplayProfile({
        email: data.data.user.email,
        foto: data.data.profile.foto,
        nama: data.data.profile.nama,
        new_foto_url: "",
      })
      setIsLoading(false)
    } catch (error) {
      toast.error("Gagal menampilkan profil\nCoba untuk memuat ulang")
    }
  }

  const doLogout = async () => {
    const loadingToast = toast.loading("Keluar...")
    user.setToken("")
    user.setIsSigned(false)
    user.setIsDone(true)
    localStorage.removeItem("lenjhelenan")
    toast.success("Berhasil keluar", { id: loadingToast })
    router.push("/login")
  }

  useEffect(() => {
    getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Head>
        <title>Profile</title>
      </Head>
      <Navbar />
      <MainContent>
        <br />
        <Link href="/">
          <Heading.h2 className="flex items-center gap-2">
            <IconChevronLeft className="w-8 h-8" />
            <span>Profile</span>
          </Heading.h2>
        </Link>
        <br />
        <div
          className="block lg:grid lg:grid-cols-2 gap-3 h-full max-w-7xl"
          style={{ gridTemplateColumns: "auto 1fr" }}
        >
          <div className="hidden lg:block">
            <Container className="w-80">
              <div className="flex items-start gap-2">
                <div className="h-12 w-12 rounded-full bg-white relative">
                  <Image
                    src={process.env.NEXT_PUBLIC_BASE_STORAGE + displayProfile.foto}
                    sizes="auto"
                    className="rounded-full bg-cover object-cover"
                    alt="profile image"
                    fill
                  />
                </div>
                <div className="flex-grow">
                  {isLoading ? (
                    <Skeleton className="w-full" />
                  ) : (
                    <Text>{displayProfile.nama}</Text>
                  )}
                  {isLoading ? (
                    <Skeleton className="w-full" />
                  ) : (
                    <Text.small>{displayProfile.email}</Text.small>
                  )}
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex flex-col gap-2">
                <div onClick={() => setIndex(0)} className="cursor-pointer">
                  <Text.small
                    className={`flex items-center gap-2 ${
                      index == 0 ? "text-red-600" : null
                    }`}
                  >
                    <IconUser className="w-5 h-5" />
                    <span>Sunting Profil</span>
                  </Text.small>
                </div>
                <div onClick={() => setIndex(1)} className="cursor-pointer">
                  <Text.small
                    className={`flex items-center gap-2 ${
                      index == 1 ? "text-red-600" : null
                    }`}
                  >
                    <IconLock className="w-5 h-5" />
                    <span>Ubah Password</span>
                  </Text.small>
                </div>
              </div>
              <br />
              <Button
                className="w-full !bg-custom-primary-red !text-white"
                onClick={doLogout}
              >
                Keluar
              </Button>
            </Container>
          </div>

          {["xs", "sm", "md"].includes(breakpoint) && (
            <FABSheet
              icon={
                <IconSettings className="w-8 h-8 text-custom-primary-red" />
              }
            >
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-white relative">
                  <Image
                    src={process.env.NEXT_PUBLIC_BASE_STORAGE + displayProfile.foto}
                    sizes="auto"
                    className="rounded-full bg-cover object-cover"
                    alt="profile image"
                    fill
                  />
                </div>
                <div className="flex-grow">
                  {isLoading ? (
                    <Skeleton className="w-full" />
                  ) : (
                    <Text>{displayProfile.nama}</Text>
                  )}
                  {isLoading ? (
                    <Skeleton className="w-full" />
                  ) : (
                    <Text.small>{displayProfile.email}</Text.small>
                  )}
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex flex-col">
                <div className="cursor-pointer" onClick={() => setIndex(0)}>
                  <Text.small
                    className={`flex items-center gap-2 ${
                      index == 0 ? "text-red-600" : null
                    }`}
                  >
                    <IconUser className="w-5 h-5" />
                    <span>Sunting Profil</span>
                  </Text.small>
                </div>
                <div className="cursor-pointer" onClick={() => setIndex(1)}>
                  <Text.small
                    className={`flex items-center gap-2 cursor-pointer ${
                      index == 1 ? "text-red-600" : null
                    }`}
                  >
                    <IconLock className="w-5 h-5" />
                    <span>Ubah Password</span>
                  </Text.small>
                </div>
              </div>
              <br />
              <Button
                className="w-full !bg-custom-primary-red !text-white"
                onClick={doLogout}
              >
                Keluar
              </Button>
            </FABSheet>
          )}
          {index == 0 ? (
            <Container>
              <Heading.h3>Informasi User</Heading.h3>
              <Text.small>
                Pada halaman ini kamu bisa mengedit informasi terkait data kamu
                yang diperlukan. Pembaruan akan muncul setelah kurang lebih 5
                menit mulai dari kamu edit.
              </Text.small>
              <br />
              <Text>Foto</Text>
              <div
                className="relative outline-none bg-cover rounded-lg shadow-custom max-h-64 aspect-square flex gap-2 items-center justify-center group transition-all cursor-pointer"
                style={{
                  backgroundImage: `url(${
                    displayProfile.new_foto_url !== ""
                      ? displayProfile.new_foto_url
                      : process.env.NEXT_PUBLIC_BASE_STORAGE + displayProfile.foto
                  })`,
                }}
              >
                <label
                  htmlFor="fotoInput"
                  className="flex items-center bg-black bg-opacity-50 h-full w-full cursor-pointer rounded-lg justify-center gap-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all"
                >
                  <IconUpload className="h-4 w-4" />
                  <span>Upload Foto Baru</span>
                </label>
                <input
                  id="fotoInput"
                  type="file"
                  className="hidden"
                  onChange={doChangePhoto}
                  accept=".jpg, .jpeg, .png"
                />
              </div>
              <br />
              <Text>Nama Lengkap</Text>
              {isLoading ? (
                <Skeleton className="h-12" />
              ) : (
                <TextInput
                  name="nama"
                  value={profile.nama}
                  onChange={doChangeProfile}
                  placeholder="Masukkan nama lengkapmu"
                />
              )}
              <br />
              <Text>Alamat Lengkap</Text>
              {isLoading ? (
                <Skeleton className="h-12" />
              ) : (
                <TextInput
                  name="alamat"
                  value={profile.alamat}
                  onChange={doChangeProfile}
                  placeholder="Masukkan Alamat lengkapmu"
                />
              )}
              <br />
              <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="w-full">
                  <Text>Jenis Kelamin</Text>
                  {isLoading ? (
                    <Skeleton className="h-12" />
                  ) : (
                    <Select
                      leftIcon={<IconUser className="w-5 h-5" />}
                      value={profile.jenis_kelamin}
                      name="jenis_kelamin"
                      onChange={doChangeProfile}
                      options={[
                        {
                          name: "Belum diisi",
                          value: "",
                        },
                        {
                          name: "Laki-Laki",
                          value: "L",
                        },
                        {
                          name: "Perempuan",
                          value: "P",
                        },
                      ]}
                    />
                  )}
                </div>
                <div className="w-full">
                  <Text>Tanggal Lahir</Text>
                  {isLoading ? (
                    <Skeleton className="h-12" />
                  ) : (
                    <DateInput
                      name="tanggal_lahir"
                      value={profile.tanggal_lahir}
                      onChange={doChangeProfile}
                    />
                  )}
                </div>
              </div>
              <br />
              <Text>No HP</Text>
              {isLoading ? (
                <Skeleton className="h-12" />
              ) : (
                <TextInput
                  name="no_hp"
                  value={profile.no_hp}
                  onChange={doChangeProfile}
                  placeholder="Masukkan no HP"
                />
              )}
              <br />
              {isLoading ? (
                <Skeleton className="h-12" />
              ) : (
                <Button className="w-full" onClick={doUpdateProfile}>
                  Perbarui Profil
                </Button>
              )}
            </Container>
          ) : (
            <Container>
              <Heading.h3>Ubah Password</Heading.h3>
              <Text.small>Pada halaman ini kamu bisa Ubah Password</Text.small>
              <br />
              <Text>Password</Text>
              {isLoading ? (
                <Skeleton className="h-12" />
              ) : (
                <TextInput.obscure
                  name="password"
                  value={secret.password}
                  onChange={doChangePassword}
                  placeholder="Masukkan password"
                />
              )}
              <br />
              <Text>Ulangi Password</Text>
              {isLoading ? (
                <Skeleton className="h-12" />
              ) : (
                <TextInput.obscure
                  name="password_confirmation"
                  value={secret.password_confirmation}
                  onChange={doChangePassword}
                  placeholder="Masukkan ulang password"
                />
              )}
              <br />
              {isLoading ? (
                <Skeleton className="h-12" />
              ) : (
                <Button className="w-full" onClick={doUpdatePassword}>
                  Perbarui Password
                </Button>
              )}
            </Container>
          )}
        </div>
      </MainContent>
      <br />
      <Footer />
    </Wrapper>
  )
}

export default withAuth(ProfilePage)
