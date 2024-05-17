import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Bell, EyeOff, User } from "lucide-react";
import { IoMaleFemale, IoMale, IoFemale } from "react-icons/io5";
import { Container } from "@/components";

const Profile = () => {
  return (
    <>
      <Container>
        <div className="grid xl:grid-cols-3 gap-4">
          <div className="col-span-1 space-y-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Avatar</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-start xl:justify-center gap-x-4">
                <Label htmlFor="avatar" className="relative cursor-pointer">
                  <img
                    src={"https://i.pravatar.cc/150"}
                    alt=""
                    className="w-32 h-32 border rounded-lg shadow-sm"
                  />
                </Label>
                <Input type="file" id="avatar" className="hidden" />

                <div className="flex flex-col gap-y-2">
                  <h1 className="text-2xl font-semibold">admin</h1>
                  <p className="text-base font-medium text-muted-foreground">
                    example@gmail.com
                  </p>
                  <Label
                    htmlFor="avatar"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium cursor-pointer h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Change Avatar
                  </Label>
                </div>
              </CardContent>
            </Card>
            <Card className="">
              <CardHeader className="pb-3">
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-1">
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                  <Bell className="mt-px h-5 w-5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Everything
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Email digest, mentions & all activity.
                    </p>
                  </div>
                </div>
                <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                  <User className="mt-px h-5 w-5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Available
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Only mentions and comments.
                    </p>
                  </div>
                </div>
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                  <EyeOff className="mt-px h-5 w-5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Ignoring</p>
                    <p className="text-sm text-muted-foreground">
                      Turn off all notifications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="xl:col-span-2">
            <Card>
              <CardHeader className="pb-9">
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="flex items-center justify-center gap-x-8">
                    <div className="space-y-2 w-1/2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        defaultValue={"admin"}
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                    <div className="space-y-2 w-1/2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        defaultValue={"admin"}
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-x-8">
                    <div className="space-y-2 w-1/2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        placeholder="Username"
                        name="username"
                        defaultValue={"admin"}
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                    <div className="space-y-2 w-1/2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        defaultValue={"example@gmail.com"}
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-x-8">
                    <div className="space-y-2 w-1/2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        type="number"
                        id="phone"
                        placeholder="Phone"
                        name="phone"
                        defaultValue={"1234567890"}
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                    <div className="space-y-2 w-1/2">
                      <Label htmlFor="birthday">Birthday</Label>
                      <Input
                        type="date"
                        id="birthday"
                        placeholder="Birthday"
                        name="birthday"
                        defaultValue={new Date("1999-01-01")
                          .toISOString()
                          .substr(0, 10)}
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <RadioGroup
                      name="gender"
                      defaultValue={"male"}
                      className="flex items-center gap-x-10"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label
                          htmlFor="male"
                          className="flex items-center gap-x-1"
                        >
                          <IoMale className="h-5 w-5" /> Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label
                          htmlFor="female"
                          className="flex items-center gap-x-1"
                        >
                          <IoFemale className="h-5 w-5" /> Female
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label
                          htmlFor="other"
                          className="flex items-center gap-x-1"
                        >
                          <IoMaleFemale className="h-5 w-5" /> Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit">Update Profile</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
