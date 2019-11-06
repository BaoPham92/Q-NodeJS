# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  hostname = "ctfserver"
  config.vm.box = "ubuntu/bionic64"

  # Disable automatic box update checking.
  config.vm.box_check_update = false
  config.vm.host_name = hostname

  # SSH creds
  #config.ssh.username = ""
  #config.ssh.password = ""

  config.vm.network "public_network"

  config.vm.provider "vmware" do |v|
    v.memory = 2048
    v.cpus = 1
    v.linked_clone = true
    v.name = hostname
  end

  # Files to be copied to the guest
  config.vm.provision "file", source: "frontend",          destination: "/tmp/frontend"
  config.vm.provision "file", source: "API",       destination: "/tmp/API"
  config.vm.provision "file", source: "scripts",    destination: "/tmp/scripts"
  config.vm.provision "file", source: "sql",    destination: "/tmp/sql"

  # We want to make sure things are not routed out the NAT interface
  config.vm.provision "shell", inline: "route del default gw 10.0.2.2", run: "always"
  # Run the provisioning scripts
  config.vm.provision "shell", path: "python_install.sh", name: "python_install"
  config.vm.provision "shell", path: "sql_install.sh", name: "sql_install"
end
