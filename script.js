        // Global variables
        let cart = [];
        let currentProduct = {};
        let deliveryFee = 0;

        // Product data
        const products = {
            acai: {
                title: "Açaí",
                sizes: [
                    { size: "200ml", cash: 5.00, card: 5.50 },
                    { size: "300ml", cash: 8.00, card: 8.50 },
                    { size: "400ml", cash: 12.00, card: 12.50 },
                    { size: "500ml", cash: 15.00, card: 15.50 }
                ],
                toppings: ["Paçoca", "Jujuba", "Granola", "Confete", "Flocos de Arroz", "Leite em Pó", "Amendoim", "Choco Boll", "Sucrilhos"],
                syrups: ["Chocolate", "Maracujá", "Morango", "Limão", "Caramelo", "Frutas Vermelhas"]
            },
            sorvete: {
                title: "Sorvete",
                options: [    
                    { name: "Picolé", cash: 1.50, card: 2.00, type: "picole", balls: 0 },                
                    { name: "Casquinha (1 bola)", cash: 4.00, card: 4.50, type: "sorvete", balls: 1 },
                    { name: "Cascão (1 bola)", cash: 6.00, card: 6.50, type: "sorvete", balls: 1 },
                    { name: "Cascão (2 bolas)", cash: 8.00, card: 8.50, type: "sorvete", balls: 2 },
                    { name: "Cestinha (2 bolas)", cash: 8.00, card: 8.50, type: "sorvete", balls: 2 },
                    { name: "Cestinha (3 bolas)", cash: 10.00, card: 10.50, type: "sorvete", balls: 3 }                    
                ],
                picoleFlavors: ["Limão", "Graviola", "Maracujá"],
                sorveteflavors: ["Chocolate", "Baunilha", "Maracujá", "Morango", "Coco", "Flocos", "Napolitano"],
                toppings: ["Paçoca", "Jujuba", "Granola", "Confete", "Flocos de Arroz", "Leite em Pó", "Amendoim", "Choco Boll", "Sucrilhos"],
                syrups: ["Chocolate", "Maracujá", "Morango", "Limão", "Caramelo", "Frutas Vermelhas"],
                toppingPrice: 1.00
            },
            salgadinhos: {
                title: "Salgadinhos",
                quantities: [
                    { qty: "1 Quibe G com queijo", cash: 4.00, card: 4.50, showFlavors: false },
                    { qty: "Porção: 10 unidades", cash: 5.00, card: 5.50, showFlavors: true },
                    { qty: "50 unidades", cash: 25.00, card: 27.00, showFlavors: true },
                    { qty: "Cento", cash: 50.00, card: 53.00, showFlavors: true },                    
                    { qty: "50 unidades Congelados (pacote)", cash: 22.00, card: 23.00, showFlavors: true },
                    { qty: "Cento Congelado (pacote)", cash: 44.00, card: 46.00, showFlavors: true }
                ],
                flavors: ["Coxinha", "Risole de carne", "Camarão", "Quibe", "Bolinha de Queijo com orégano", "Queijo com presunto", "Salsicha", "Queijo com alho"]
            },
            batata: {
                title: "Batata Frita",
                options: [
                    { name: "Batata Pequena Simples", description: "(Cheddar e Orégano)", cash: 8.00, card: 9.00 },
                    { name: "Batata Pequena Maluca", description: "(Calabresa, Bacon, Cheddar, Orégano e Cebola)", cash: 12.00, card: 13.00 },
                    { name: "Batata Média Simples", description: "(Cheddar e Orégano)", cash: 14.00, card: 15.00 },
                    { name: "Batata Média Maluca", description: "(Calabresa, Bacon, Cheddar, Orégano, Cebola e Ovo de Codorna)", cash: 16.00, card: 17.00 },
                    { name: "Batata Grande Big Maluca", description: "(Calabresa, Bacon, Cheddar, Orégano, Cebola e Ovo de Codorna)", cash: 38.00, card: 40.00 }
                ]
            },
            sucos: {
                title: "Sucos",
                sizes: [
                    { size: "400ml", cash: 7.00, card: 8.00 },
                    { size: "500ml", cash: 9.00, card: 10.00 }                   
                ],
                flavors: ["Morango", "Maracujá", "Abacaxi", "Abacaxi com Hortelã", "Limonada Suiça"]                                                                        
            },
            empadao: {
                title: "Empadão",
                options: [
                    { name: "Empadinha", cash: 2.50, card: 3.00 },
                    { name: "Empadão de Frango", cash: 10.00, card: 10.50 },
                    { name: "Empadão de Frango com Requeijão", cash: 11.00, card: 11.50 },
                    { name: "Empadão de Camarão", cash: 12.00, card: 12.50 },
                    { name: "Empadão grande de Frango", cash: 60.00, card: 63.00 },
                    { name: "Empadão grande de Frango com Requeijão", cash: 70.00, card: 73.00 },
                    { name: "Empadão grande de Camarão", cash: 70.00, card: 73.00 }
                ]
            },
            bolos: {
                title: "Bolos",
                isOrder: true,
                flavors: ["Cenoura com cobertura de chocolate", "Prestígio", "Banana", "Chocolate com cobertura  de chocolate", "Formigueiro", "Abacaxi", "Milho"],
                sizes: [
                    { size: "P", cash: 25.00, card: 26.00 },
                    { size: "M", cash: 30.00, card: 32.00 },
                    { size: "G", cash: 40.00, card: 42.00 }
                ]
            },
            torta: {
                title: "Tortas",
                isOrder: true,                
                options: [
                    { name: "Morango", cash: 55.00, card: 58.00 },
                    { name: "Maracujá", cash: 55.00, card: 58.00 },
                    { name: "Limão", cash: 55.00, card: 58.00 }                    
                ]
            },
            pudim: {
                title: "Pudim",
                isOrder: true,
                sizes: [
                    { size: "P", cash: 30.00, card: 32.00 },
                    { size: "M", cash: 40.00, card: 42.00 },
                    { size: "G", cash: 60.00, card: 62.00 }
                ]
            },
            pave: {
                title: "Pavê",
                isOrder: true,
                flavors: ["Chocolate", "Tradicional"],
                sizes: [
                    { size: "2000ml", cash: 60.00, card: 63.00 }                    
                ]
            }
        };

        
        // DOM elements
        const homeScreen = document.getElementById('homeScreen');
        const productScreen = document.getElementById('productScreen');
        const cartScreen = document.getElementById('cartScreen');
        const checkoutScreen = document.getElementById('checkoutScreen');
        const productTitle = document.getElementById('productTitle');
        const productContent = document.getElementById('productContent');
        const cartBtn = document.getElementById('cartBtn');
        const cartCount = document.getElementById('cartCount');
        const backBtn = document.getElementById('backBtn');
        const backToHomeBtn = document.getElementById('backToHomeBtn');
        const backToCartBtn = document.getElementById('backToCartBtn');
        const successMessage = document.getElementById('successMessage');

        // Event listeners
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                showProduct(category);
            });
        });

        cartBtn.addEventListener('click', showCart);
        backBtn.addEventListener('click', showHome);
        backToHomeBtn.addEventListener('click', showHome);
        backToCartBtn.addEventListener('click', showCart);

        document.getElementById('checkoutBtn').addEventListener('click', showCheckout);

        // Order type change handler
        document.querySelectorAll('input[name="orderType"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const deliveryFields = document.getElementById('deliveryFields');
                if (e.target.value === 'entrega') {
                    deliveryFields.classList.remove('hidden');
                } else {
                    deliveryFields.classList.add('hidden');
                    deliveryFee = 0;
                    updateDeliveryFee();
                }
            });
        });

        // Payment method change handler
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const changeFields = document.getElementById('changeFields');
                if (e.target.value === 'dinheiro') {
                    changeFields.classList.remove('hidden');
                } else {
                    changeFields.classList.add('hidden');
                }
            });
        });

        // Change option handler
        document.querySelectorAll('input[name="needChange"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const changeAmountField = document.getElementById('changeAmountField');
                if (e.target.value === 'sim') {
                    changeAmountField.classList.remove('hidden');
                } else {
                    changeAmountField.classList.add('hidden');
                }
            });
        });

        // Neighborhood change handler
        document.getElementById('customerNeighborhood').addEventListener('change', (e) => {
            const selectedOption = e.target.selectedOptions[0];
            deliveryFee = selectedOption ? parseFloat(selectedOption.dataset.fee) || 0 : 0;
            updateDeliveryFee();
        });

        // Checkout form handler
        document.getElementById('checkoutForm').addEventListener('submit', (e) => {
            e.preventDefault();
            sendToWhatsApp();
        });

        // Functions
        function showHome() {
            hideAllScreens();
            homeScreen.classList.remove('hidden');
        }

        function showProduct(category) {
            hideAllScreens();
            productScreen.classList.remove('hidden');
            
            const product = products[category];
            productTitle.textContent = product.title;
            currentProduct = { category, ...product };
            
            renderProduct(category);
        }

        function showCart() {
            hideAllScreens();
            cartScreen.classList.remove('hidden');
            renderCart();
        }

        function showCheckout() {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            hideAllScreens();
            checkoutScreen.classList.remove('hidden');
        }

        function hideAllScreens() {
            homeScreen.classList.add('hidden');
            productScreen.classList.add('hidden');
            cartScreen.classList.add('hidden');
            checkoutScreen.classList.add('hidden');
        }

        function renderProduct(category) {
            const product = products[category];
            let html = '';

            // Add order notice for special items
            if (product.isOrder) {
                html += `
                    <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <span class="text-yellow-500 text-xl">⚠️</span>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm text-yellow-700">
                                    <strong>Item para encomenda!</strong><br>
                                    Necessário sinal de 40% do valor total com antecedência.
                                </p>
                            </div>
                        </div>
                    </div>
                `;
            }

            if (category === 'acai') {
                html += renderSizedProduct(product, category);
            } else if (category === 'sorvete') {
                html += renderSorvete(product);
            } else if (category === 'salgadinhos') {
                html += renderSalgadinhos(product);
            } else if (category === 'bolos') {
                html += renderBolos(product);
            } else if (category === 'pudim') {
                html += renderSizedSimple(product);
            } else if (category === 'pave') {
                html += renderPave(product);
            } else if (category === 'sucos') {
                html += renderSucos(product);
            } else {
                html += renderSimpleProduct(product);
            }

            productContent.innerHTML = html;
            attachProductEvents(category);
        }

        function renderSizedProduct(product, category) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha o tamanho:</h3>
                    <div class="grid grid-cols-2 gap-3">
                        ${product.sizes.map((size, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="size" value="${index}" class="mr-2">
                                ${size.size}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="toppingsSection">
                    <h3 class="text-lg font-bold mb-3">Acompanhamentos:</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.toppings.map(topping => `
                            <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="topping" value="${topping}" class="mr-2">
                                ${topping}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="syrupSection">
                    <h3 class="text-lg font-bold mb-3">Calda (escolha uma):</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.syrups.map(syrup => `
                            <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="syrup" value="${syrup}" class="mr-2">
                                ${syrup}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>
                
                <div id="orderDateSection" class="hidden mb-6">
                    <label class="block text-gray-700 font-bold mb-2">Data para retirada/entrega:</label>
                    <input type="date" id="orderDate" class="w-full border rounded-lg px-3 py-2" required>
                    <p class="text-sm text-gray-600 mt-1">Mínimo 24 horas de antecedência</p>
                </div>
                
                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }

        function renderSorvete(product) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha uma opção:</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${product.options.map((option, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="option" value="${index}" class="mr-2">
                                <div>
                                    <div class="font-semibold">${option.name}</div>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="flavorSection">
                    <h3 id="flavorTitle" class="text-lg font-bold mb-3">Escolha o sabor:</h3>
                    <div id="flavorOptions" class="grid grid-cols-2 gap-2">
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="toppingsSection">
                    <h3 class="text-lg font-bold mb-3">Acompanhamentos:</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.toppings.map(topping => `
                            <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="topping" value="${topping}" class="mr-2">
                                ${topping}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="syrupSection">
                    <h3 class="text-lg font-bold mb-3">Calda (escolha uma):</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.syrups.map(syrup => `
                            <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="syrup" value="${syrup}" class="mr-2">
                                ${syrup}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>
                
                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }
        
        function renderSalgadinhos(product) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha a quantidade:</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${product.quantities.map((qty, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="quantity" value="${index}" class="mr-2">
                                ${qty.qty}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="flavorsSection">
                    <h3 class="text-lg font-bold mb-3">Sabores:</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.flavors.map(flavor => `
                            <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="flavor" value="${flavor}" class="mr-2">
                                ${flavor}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>
                
                <div id="orderDateSection" class="hidden mb-6">
                    <label class="block text-gray-700 font-bold mb-2">Data para retirada/entrega:</label>
                    <input type="date" id="orderDate" class="w-full border rounded-lg px-3 py-2" required>
                    <p class="text-sm text-gray-600 mt-1">Mínimo 24 horas de antecedência</p>
                </div>
                
                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }


        function renderBolos(product) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha o sabor:</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.flavors.map(flavor => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="flavor" value="${flavor}" class="mr-2">
                                ${flavor}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="sizeSection">
                    <h3 class="text-lg font-bold mb-3">Escolha o tamanho:</h3>
                    <div class="grid grid-cols-3 gap-3">
                        ${product.sizes.map((size, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="size" value="${index}" class="mr-2">
                                ${size.size}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>
                
                <div id="orderDateSection" class="hidden mb-6">
                    <label class="block text-gray-700 font-bold mb-2">Data para retirada/entrega:</label>
                    <input type="date" id="orderDate" class="w-full border rounded-lg px-3 py-2" required>
                    <p class="text-sm text-gray-600 mt-1">Mínimo 24 horas de antecedência</p>
                </div>
                
                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }

        function renderSizedSimple(product) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha o tamanho:</h3>
                    <div class="grid grid-cols-3 gap-3">
                        ${product.sizes.map((size, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="size" value="${index}" class="mr-2">
                                ${size.size}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>
                
                <div id="orderDateSection" class="hidden mb-6">
                    <label class="block text-gray-700 font-bold mb-2">Data para retirada/entrega:</label>
                    <input type="date" id="orderDate" class="w-full border rounded-lg px-3 py-2" required>
                    <p class="text-sm text-gray-600 mt-1">Mínimo 24 horas de antecedência</p>
                </div>
                
                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }

        function renderPave(product) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha o tamanho:</h3>
                    <div class="grid grid-cols-2 gap-3">
                     ${product.sizes.map((size, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                             <input type="radio" name="size" value="${index}" class="mr-2">
                                ${size.size}
                            </label>
                        `).join('')}
                    </div>
                </div>

                <div class="mb-6 hidden" id="flavorSection">
                    <h3 class="text-lg font-bold mb-3">Escolha o sabor:</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.flavors.map(flavor => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                            <input type="radio" name="flavor" value="${flavor}" class="mr-2">
                                ${flavor}
                            </label>
                        `).join('')}
                    </div>
                </div>

                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>

                <div id="orderDateSection" class="hidden mb-6">
                    <label class="block text-gray-700 font-bold mb-2">Data para retirada/entrega:</label>
                    <input type="date" id="orderDate" class="w-full border rounded-lg px-3 py-2" required>
                    <p class="text-sm text-gray-600 mt-1">Mínimo 24 horas de antecedência</p>
                </div>

                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }


        function renderSucos(product) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha o tamanho:</h3>
                    <div class="grid grid-cols-2 gap-3">
                        ${product.sizes.map((size, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="size" value="${index}" class="mr-2">
                                ${size.size}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="mb-6 hidden" id="flavorSection">
                    <h3 class="text-lg font-bold mb-3">Escolha o sabor:</h3>
                    <div class="grid grid-cols-2 gap-2">
                        ${product.flavors.map(flavor => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="flavor" value="${flavor}" class="mr-2">
                                ${flavor}
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>
                
                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }


        function renderSimpleProduct(product) {
            return `
                <div class="mb-6">
                    <h3 class="text-lg font-bold mb-3">Escolha uma opção:</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${product.options.map((option, index) => `
                            <label class="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="option" value="${index}" class="mr-2">
                                <div>
                                    <div class="font-semibold">${option.name}</div>
                                    ${option.description ? `<div class="text-sm text-gray-600">${option.description}</div>` : ''}
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div id="priceSection" class="hidden mb-6">
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div id="priceDisplay" class="text-xl font-bold text-green-600"></div>
                    </div>
                </div>
                
                <div id="orderDateSection" class="hidden mb-6">
                    <label class="block text-gray-700 font-bold mb-2">Data para retirada/entrega:</label>
                    <input type="date" id="orderDate" class="w-full border rounded-lg px-3 py-2" required>
                    <p class="text-sm text-gray-600 mt-1">Mínimo 24 horas de antecedência</p>
                </div>
                
                <button id="addToCartBtn" class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold hidden">
                    Adicionar ao Carrinho
                </button>
            `;
        }

        function attachProductEvents(category) {
            const priceSection = document.getElementById('priceSection');
            const priceDisplay = document.getElementById('priceDisplay');
            const addToCartBtn = document.getElementById('addToCartBtn');

            // Size/Option/Quantity selection
            document.querySelectorAll('input[name="size"], input[name="option"], input[name="quantity"]').forEach(input => {
                input.addEventListener('change', () => {
                    updatePrice();
                    showNextSections(category);
                });
            });

            // Flavor selection handler will be attached dynamically

            // Topping selection for sorvete (with price update)
            document.querySelectorAll('input[name="topping"]').forEach(input => {
                input.addEventListener('change', () => {
                    if (category === 'sorvete') {
                        updatePrice();
                    }
                });
            });

            // Add to cart
            addToCartBtn.addEventListener('click', addToCart);

            function updatePrice() {
                const product = currentProduct;
                let selectedItem = null;

                if (product.sizes) {
                    const sizeIndex = document.querySelector('input[name="size"]:checked')?.value;
                    if (sizeIndex !== undefined) {
                        selectedItem = product.sizes[parseInt(sizeIndex)];
                    }
                } else if (product.options) {
                    const optionIndex = document.querySelector('input[name="option"]:checked')?.value;
                    if (optionIndex !== undefined) {
                        selectedItem = product.options[parseInt(optionIndex)];
                    }
                } else if (product.quantities) {
                    const qtyIndex = document.querySelector('input[name="quantity"]:checked')?.value;
                    if (qtyIndex !== undefined) {
                        selectedItem = product.quantities[parseInt(qtyIndex)];
                    }
                }

                if (selectedItem) {
                    let finalCashPrice = selectedItem.cash;
                    let finalCardPrice = selectedItem.card;

                    // Add topping prices for sorvete only (flat R$ 1.00 if any selected)
                    if (category === 'sorvete' && currentProduct.toppingPrice) {
                        const selectedToppings = document.querySelectorAll('input[name="topping"]:checked');
                        if (selectedToppings.length > 0) {
                            finalCashPrice += currentProduct.toppingPrice;
                            finalCardPrice += currentProduct.toppingPrice;
                        }
                    }

                    let priceHtml = `
                        <div>À vista: R$ ${finalCashPrice.toFixed(2)}</div>
                        <div>Cartão: R$ ${finalCardPrice.toFixed(2)}</div>
                    `;
                    
                    if (product.isOrder) {
                        const signalCash = finalCashPrice * 0.4;
                        const signalCard = finalCardPrice * 0.4;
                        priceHtml += `
                            <div class="mt-2 pt-2 border-t border-gray-300">
                                <div class="text-sm text-orange-600">
                                    <strong>Sinal (40%):</strong><br>
                                    À vista: R$ ${signalCash.toFixed(2)}<br>
                                    Cartão: R$ ${signalCard.toFixed(2)}
                                </div>
                            </div>
                        `;
                    }
                    
                    priceDisplay.innerHTML = priceHtml;
                    priceSection.classList.remove('hidden');
                    
                    // Show date section for orders
                    const orderDateSection = document.getElementById('orderDateSection');
                    if (product.isOrder && orderDateSection) {
                        orderDateSection.classList.remove('hidden');
                        // Set minimum date to tomorrow
                        const tomorrow = new Date();
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        document.getElementById('orderDate').min = tomorrow.toISOString().split('T')[0];
                    }
                    
                    addToCartBtn.classList.remove('hidden');
                }
            }

            function showNextSections(category) {
                if (category === 'acai') {
                    const toppingsSection = document.getElementById('toppingsSection');
                    const syrupSection = document.getElementById('syrupSection');
                    
                    if (toppingsSection) toppingsSection.classList.remove('hidden');
                    if (syrupSection) syrupSection.classList.remove('hidden');
                } else if (category === 'sorvete') {
                    const optionIndex = document.querySelector('input[name="option"]:checked')?.value;
                    if (optionIndex !== undefined) {
                        const selectedOption = currentProduct.options[parseInt(optionIndex)];
                        setupSorveteOptions(selectedOption);
                    }
                } else if (category === 'salgadinhos') {
                    const qtyIndex = document.querySelector('input[name="quantity"]:checked')?.value;
                    if (qtyIndex !== undefined) {
                        const selectedQty = currentProduct.quantities[parseInt(qtyIndex)];
                        const flavorsSection = document.getElementById('flavorsSection');
                        if (flavorsSection && selectedQty.showFlavors) {
                            flavorsSection.classList.remove('hidden');
                        }
                    }
                } else if (category === 'pave' || category === 'sucos') {
                    const flavorSection = document.getElementById('flavorSection');
                    if (flavorSection) flavorSection.classList.remove('hidden');
                }
            }

            function setupSorveteOptions(selectedOption) {
                const flavorSection = document.getElementById('flavorSection');
                const flavorTitle = document.getElementById('flavorTitle');
                const flavorOptions = document.getElementById('flavorOptions');
                const toppingsSection = document.getElementById('toppingsSection');
                const syrupSection = document.getElementById('syrupSection');

                if (selectedOption.type === 'picole') {
                    // Picolé - apenas 1 sabor, sabores específicos
                    flavorTitle.textContent = 'Escolha o sabor:';
                    flavorOptions.innerHTML = currentProduct.picoleFlavors.map(flavor => `
                        <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                            <input type="radio" name="flavor" value="${flavor}" class="mr-2">
                            ${flavor}
                        </label>
                    `).join('');
                    
                    flavorSection.classList.remove('hidden');
                    // Picolé não tem acompanhamentos nem calda
                    if (toppingsSection) toppingsSection.classList.add('hidden');
                    if (syrupSection) syrupSection.classList.add('hidden');
                } else if (selectedOption.type === 'sorvete') {
                    // Sorvete - múltiplos sabores baseado no número de bolas
                    const maxFlavors = selectedOption.balls;
                    if (maxFlavors === 1) {
                        flavorTitle.textContent = 'Escolha o sabor:';
                        flavorOptions.innerHTML = currentProduct.sorveteFlavors.map(flavor => `
                            <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="radio" name="flavor" value="${flavor}" class="mr-2">
                                ${flavor}
                            </label>
                        `).join('');
                    } else {
                        flavorTitle.textContent = `Escolha até ${maxFlavors} sabores:`;
                        flavorOptions.innerHTML = currentProduct.sorveteFlavors.map(flavor => `
                            <label class="border rounded-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="checkbox" name="flavor" value="${flavor}" class="mr-2">
                                ${flavor}
                            </label>
                        `).join('');
                    }
                    
                    flavorSection.classList.remove('hidden');
                    if (toppingsSection) toppingsSection.classList.remove('hidden');
                    if (syrupSection) syrupSection.classList.remove('hidden');
                }

                // Attach new event listeners for flavors
                document.querySelectorAll('input[name="flavor"]').forEach(input => {
                    input.addEventListener('change', () => {
                        if (selectedOption.type === 'sorvete' && selectedOption.balls > 1) {
                            const checkedFlavors = document.querySelectorAll('input[name="flavor"]:checked');
                            if (checkedFlavors.length > selectedOption.balls) {
                                input.checked = false;
                                alert(`Você pode escolher no máximo ${selectedOption.balls} sabores!`);
                            }
                        }
                        updatePrice();
                    });
                });
            }
        }
    

        function addToCart() {
            const product = currentProduct;
            const item = {
                id: Date.now(),
                category: product.category,
                title: product.title,
                details: {},
                price: { cash: 0, card: 0 },
                isOrder: product.isOrder || false
            };

            // Get selected size/option/quantity
            if (product.sizes) {
                const sizeIndex = document.querySelector('input[name="size"]:checked')?.value;
                if (sizeIndex !== undefined) {
                    const selectedSize = product.sizes[parseInt(sizeIndex)];
                    item.details.size = selectedSize.size;
                    item.price = { cash: selectedSize.cash, card: selectedSize.card };
                }
            } else if (product.options) {
                const optionIndex = document.querySelector('input[name="option"]:checked')?.value;
                if (optionIndex !== undefined) {
                    const selectedOption = product.options[parseInt(optionIndex)];
                    item.details.option = selectedOption.name;
                    item.price = { cash: selectedOption.cash, card: selectedOption.card };
                }
            } else if (product.quantities) {
                const qtyIndex = document.querySelector('input[name="quantity"]:checked')?.value;
                if (qtyIndex !== undefined) {
                    const selectedQty = product.quantities[parseInt(qtyIndex)];
                    item.details.quantity = selectedQty.qty;
                    item.price = { cash: selectedQty.cash, card: selectedQty.card };
                }
            }

           // Add topping costs for sorvete only (flat R$ 1.00 if any selected)
            if (product.category === 'sorvete' && product.toppingPrice) {
                const selectedToppings = document.querySelectorAll('input[name="topping"]:checked');
                if (selectedToppings.length > 0) {
                    item.price.cash += product.toppingPrice;
                    item.price.card += product.toppingPrice;
                }
            }

            // Get additional selections
            const selectedFlavors = Array.from(document.querySelectorAll('input[name="flavor"]:checked')).map(cb => cb.value);
            if (selectedFlavors.length > 0) {
                item.details.flavors = selectedFlavors;
            }

            const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(cb => cb.value);
            if (selectedToppings.length > 0) {
                item.details.toppings = selectedToppings;
            }

            const selectedSyrup = document.querySelector('input[name="syrup"]:checked')?.value;
            if (selectedSyrup) {
                item.details.syrup = selectedSyrup;
            }

            // Get order date if it's an order item
            if (product.isOrder) {
                const orderDate = document.getElementById('orderDate')?.value;
                if (!orderDate) {
                    alert('Por favor, selecione a data para retirada/entrega.');
                    return;
                }
                item.details.orderDate = orderDate;
            }

            cart.push(item);
            updateCartCount();
            showSuccessMessage();
        }

        function updateCartCount() {
            const count = cart.length;
            if (count > 0) {
                cartCount.textContent = count;
                cartCount.classList.remove('hidden');
                cartCount.classList.add('cart-badge');
            } else {
                cartCount.classList.add('hidden');
            }
        }

        function showSuccessMessage() {
            successMessage.classList.remove('hidden');
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        }

        function renderCart() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');

            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Seu carrinho está vazio</p>';
                cartTotal.innerHTML = '';
                return;
            }

            let totalCash = 0;
            let totalCard = 0;

            const itemsHtml = cart.map((item, index) => {
                totalCash += item.price.cash;
                totalCard += item.price.card;

                let detailsHtml = '';
                if (item.details.size) detailsHtml += `<div>Tamanho: ${item.details.size}</div>`;
                if (item.details.option) detailsHtml += `<div>Opção: ${item.details.option}</div>`;
                if (item.details.quantity) detailsHtml += `<div>Quantidade: ${item.details.quantity}</div>`;
                if (item.details.flavors) detailsHtml += `<div>Sabores: ${item.details.flavors.join(', ')}</div>`;
                if (item.details.toppings) detailsHtml += `<div>Acompanhamentos: ${item.details.toppings.join(', ')}</div>`;
                if (item.details.syrup) detailsHtml += `<div>Calda: ${item.details.syrup}</div>`;
                if (item.details.orderDate) {
                    const date = new Date(item.details.orderDate);
                    detailsHtml += `<div class="text-orange-600 font-semibold">📅 Data: ${date.toLocaleDateString('pt-BR')}</div>`;
                }

                let priceHtml = `À vista: R$ ${item.price.cash.toFixed(2)} | Cartão: R$ ${item.price.card.toFixed(2)}`;
                if (item.isOrder) {
                    const signalCash = item.price.cash * 0.4;
                    const signalCard = item.price.card * 0.4;
                    priceHtml += `<br><span class="text-orange-600">Sinal: R$ ${signalCash.toFixed(2)} / R$ ${signalCard.toFixed(2)}</span>`;
                }

                return `
                    <div class="border-b pb-4 mb-4 ${item.isOrder ? 'bg-yellow-50 p-3 rounded-lg' : ''}">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h3 class="font-bold">${item.title} ${item.isOrder ? '📋' : ''}</h3>
                                <div class="text-sm text-gray-600 mt-1">
                                    ${detailsHtml}
                                </div>
                                <div class="text-sm text-green-600 mt-2">
                                    ${priceHtml}
                                </div>
                            </div>
                            <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 ml-4">
                                🗑️
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            cartItems.innerHTML = itemsHtml;
            cartTotal.innerHTML = `
                <div class="text-center">
                    <div>Total à vista: R$ ${totalCash.toFixed(2)}</div>
                    <div>Total cartão: R$ ${totalCard.toFixed(2)}</div>
                </div>
            `;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartCount();
            renderCart();
        }

        function updateDeliveryFee() {
            const deliveryFeeDiv = document.getElementById('deliveryFee');
            if (deliveryFee > 0) {
                deliveryFeeDiv.textContent = `Taxa de entrega: R$ ${deliveryFee.toFixed(2)}`;
            } else {
                deliveryFeeDiv.textContent = '';
            }
        }

        function sendToWhatsApp() {
            const name = document.getElementById('customerName').value;
            const phone = document.getElementById('customerPhone').value;
            const orderType = document.querySelector('input[name="orderType"]:checked').value;
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

            let message = `🍔 *PEDIDO - EXPLOSÃO DE SABORES*\n\n`;
            message += `👤 *Cliente:* ${name}\n`;
            message += `📱 *WhatsApp:* ${phone}\n`;
            message += `📦 *Tipo:* ${orderType === 'retirada' ? 'Retirada' : 'Entrega'}\n`;
            
            // Payment method
            let paymentText = '';
            if (paymentMethod === 'dinheiro') {
                paymentText = '💵 Dinheiro';
                const needChange = document.querySelector('input[name="needChange"]:checked')?.value;
                if (needChange === 'sim') {
                    const changeAmount = document.getElementById('changeAmount').value;
                    if (changeAmount) {
                        paymentText += ` (Troco para R$ ${parseFloat(changeAmount).toFixed(2)})`;
                    }
                } else if (needChange === 'nao') {
                    paymentText += ' (Não precisa de troco)';
                }
            } else if (paymentMethod === 'pix') {
                paymentText = '📱 PIX';
            } else if (paymentMethod === 'cartao') {
                paymentText = '💳 Cartão';
            }
            message += `💳 *Pagamento:* ${paymentText}\n\n`;

            if (orderType === 'entrega') {
                const address = document.getElementById('customerAddress').value;
                const number = document.getElementById('customerNumber').value;
                const reference = document.getElementById('customerReference').value;
                const neighborhood = document.getElementById('customerNeighborhood').selectedOptions[0].text;

                message += `📍 *Endereço de Entrega:*\n`;
                message += `${address}, ${number}\n`;
                message += `${neighborhood}\n`;
                if (reference) message += `Referência: ${reference}\n`;
                message += `Taxa de entrega: R$ ${deliveryFee.toFixed(2)}\n\n`;
            }

            message += `🛒 *ITENS DO PEDIDO:*\n`;
            
            let totalCash = deliveryFee;
            let totalCard = deliveryFee;
            let hasOrders = false;

            cart.forEach((item, index) => {
                message += `\n${index + 1}. ${item.title}${item.isOrder ? ' 📋 (ENCOMENDA)' : ''}\n`;
                if (item.details.size) message += `   Tamanho: ${item.details.size}\n`;
                if (item.details.option) message += `   Opção: ${item.details.option}\n`;
                if (item.details.quantity) message += `   Quantidade: ${item.details.quantity}\n`;
                if (item.details.flavors) message += `   Sabores: ${item.details.flavors.join(', ')}\n`;
                if (item.details.toppings) message += `   Acompanhamentos: ${item.details.toppings.join(', ')}\n`;
                if (item.details.syrup) message += `   Calda: ${item.details.syrup}\n`;
                if (item.details.orderDate) {
                    const date = new Date(item.details.orderDate);
                    message += `   📅 Data: ${date.toLocaleDateString('pt-BR')}\n`;
                    hasOrders = true;
                }
                
                // Show price based on payment method
                let itemPrice = 0;
                if (paymentMethod === 'dinheiro' || paymentMethod === 'pix') {
                    itemPrice = item.price.cash;
                    message += `   💰 Valor: R$ ${item.price.cash.toFixed(2)}\n`;
                    if (item.isOrder) {
                        const signal = item.price.cash * 0.4;
                        message += `   🔸 Sinal (40%): R$ ${signal.toFixed(2)}\n`;
                    }
                } else if (paymentMethod === 'cartao') {
                    itemPrice = item.price.card;
                    message += `   💰 Valor: R$ ${item.price.card.toFixed(2)}\n`;
                    if (item.isOrder) {
                        const signal = item.price.card * 0.4;
                        message += `   🔸 Sinal (40%): R$ ${signal.toFixed(2)}\n`;
                    }
                }
                
                totalCash += item.price.cash;
                totalCard += item.price.card;
            });

            // Show only the relevant total based on payment method
            let finalTotal = deliveryFee;
            cart.forEach(item => {
                if (paymentMethod === 'dinheiro' || paymentMethod === 'pix') {
                    finalTotal += item.price.cash;
                } else if (paymentMethod === 'cartao') {
                    finalTotal += item.price.card;
                }
            });

            if (paymentMethod === 'dinheiro') {
                message += `\n💵 *TOTAL:* R$ ${finalTotal.toFixed(2)}`;
            } else if (paymentMethod === 'pix') {
                message += `\n📱 *TOTAL:* R$ ${finalTotal.toFixed(2)}`;
            } else if (paymentMethod === 'cartao') {
                message += `\n💳 *TOTAL:* R$ ${finalTotal.toFixed(2)}`;
            }            

            if (hasOrders) {
                message += `\n\n⚠️ *ATENÇÃO:* Este pedido contém itens para encomenda que requerem sinal de 40% com antecedência.`;
            }

            if (orderType === 'retirada') {
                message += `\n\n📍 *Localização para retirada:*\nhttps://maps.google.com/?q=-23.550520,-46.633308`;
            }

            const whatsappUrl = `https://wa.me/5521982388710?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }

        // Make removeFromCart globally accessible
        window.removeFromCart = removeFromCart;
    
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98799d3065b0f1dd',t:'MTc1OTI5NzEwOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();