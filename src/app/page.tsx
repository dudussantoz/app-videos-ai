"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { 
  Play, 
  Sparkles, 
  Video, 
  Download, 
  Settings, 
  Crown, 
  Zap,
  Clock,
  Users,
  TrendingUp,
  Music,
  Type,
  Image,
  Hash,
  Shield,
  CheckCircle,
  Star,
  Wand2,
  Upload,
  Link,
  Palette,
  Volume2,
  FileVideo,
  Share2
} from 'lucide-react'

interface VideoProject {
  id: string
  appName: string
  style: string
  status: 'generating' | 'completed' | 'failed'
  progress: number
  duration: string
  createdAt: string
  thumbnail?: string
}

export default function AppPromoterAI() {
  const [appInput, setAppInput] = useState('')
  const [videoStyle, setVideoStyle] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [projects, setProjects] = useState<VideoProject[]>([])
  const [activeTab, setActiveTab] = useState('create')
  const [showPricing, setShowPricing] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  // Configurações avançadas
  const [voiceType, setVoiceType] = useState('feminina-jovem')
  const [musicStyle, setMusicStyle] = useState('energetica')
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [creatorName, setCreatorName] = useState('')
  const [affiliateLink, setAffiliateLink] = useState('')
  const [customScript, setCustomScript] = useState('')

  const videoStyles = [
    { value: 'anuncio', label: '📢 Anúncio Promocional', description: 'Vídeo comercial chamativo' },
    { value: 'review', label: '⭐ Review Completo', description: 'Análise detalhada do app' },
    { value: 'tutorial', label: '🎯 Tutorial Rápido', description: 'Como usar em 30 segundos' },
    { value: 'motivacional', label: '🚀 Motivacional', description: 'Inspire ação imediata' },
    { value: 'comparativo', label: '⚖️ Comparativo', description: 'Compare com concorrentes' },
    { value: 'testemunhal', label: '💬 Testemunhal', description: 'Depoimento de usuário' }
  ]

  const voiceOptions = [
    { value: 'feminina-jovem', label: '👩 Feminina Jovem' },
    { value: 'masculina-profissional', label: '👨 Masculina Profissional' },
    { value: 'feminina-madura', label: '👩‍💼 Feminina Madura' },
    { value: 'masculina-energetica', label: '🎯 Masculina Energética' }
  ]

  const musicOptions = [
    { value: 'energetica', label: '⚡ Energética' },
    { value: 'corporativa', label: '💼 Corporativa' },
    { value: 'moderna', label: '🎵 Moderna' },
    { value: 'motivacional', label: '🚀 Motivacional' },
    { value: 'sem-musica', label: '🔇 Sem Música' }
  ]

  const handleGenerate = async () => {
    if (!appInput || !videoStyle) return

    setIsGenerating(true)
    setProgress(0)

    // Simular processo de geração
    const steps = [
      'Analisando aplicativo...',
      'Gerando roteiro com IA...',
      'Criando narração...',
      'Gerando imagens de fundo...',
      'Adicionando legendas dinâmicas...',
      'Sincronizando áudio...',
      'Renderizando vídeo final...'
    ]

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setProgress(((i + 1) / steps.length) * 100)
    }

    const newProject: VideoProject = {
      id: Date.now().toString(),
      appName: appInput,
      style: videoStyle,
      status: 'completed',
      progress: 100,
      duration: '45s',
      createdAt: new Date().toLocaleString(),
      thumbnail: `https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop`
    }

    setProjects(prev => [newProject, ...prev])
    setIsGenerating(false)
    setProgress(0)
    setActiveTab('projects')
  }

  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true)
      setShowAdmin(false)
    }
  }

  const plans = [
    {
      name: 'Gratuito',
      price: 'R$ 0',
      period: '/mês',
      videos: '3 vídeos',
      features: [
        '3 vídeos por mês',
        'Duração até 30s',
        'Marca d\'água',
        'Qualidade HD',
        'Estilos básicos'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 'R$ 29',
      period: '/mês',
      videos: '50 vídeos',
      features: [
        '50 vídeos por mês',
        'Duração até 60s',
        'Sem marca d\'água',
        'Qualidade 4K',
        'Todos os estilos',
        'Logo personalizado',
        'Link de afiliado',
        'Suporte prioritário'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: 'R$ 79',
      period: '/mês',
      videos: 'Ilimitado',
      features: [
        'Vídeos ilimitados',
        'Duração até 90s',
        'Sem marca d\'água',
        'Qualidade 4K',
        'Todos os estilos',
        'Logo personalizado',
        'Link de afiliado',
        'API access',
        'Suporte 24/7',
        'Análises avançadas'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AppPromoter AI
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Crie vídeos promocionais com IA
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {isAdmin && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Crown className="w-4 h-4 mr-1" />
                  Admin
                </Badge>
              )}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdmin(true)}
                className="hidden sm:flex"
              >
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </Button>
              
              <Button
                onClick={() => setShowPricing(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Crown className="w-4 h-4 mr-2" />
                Planos
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto">
            <TabsTrigger value="create" className="flex items-center gap-2">
              <Wand2 className="w-4 h-4" />
              Criar
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FileVideo className="w-4 h-4" />
              Projetos
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Aba Criar Vídeo */}
          <TabsContent value="create" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Crie Vídeos Promocionais com IA
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Transforme qualquer app em um vídeo viral em minutos
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Formulário Principal */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      Informações Básicas
                    </CardTitle>
                    <CardDescription>
                      Insira os dados do app que você quer promover
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="app-input">Nome do App ou Link da Store</Label>
                      <Input
                        id="app-input"
                        placeholder="Ex: WhatsApp ou https://play.google.com/store/apps/..."
                        value={appInput}
                        onChange={(e) => setAppInput(e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Estilo do Vídeo</Label>
                      <Select value={videoStyle} onValueChange={setVideoStyle}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Escolha o estilo do vídeo" />
                        </SelectTrigger>
                        <SelectContent>
                          {videoStyles.map((style) => (
                            <SelectItem key={style.value} value={style.value}>
                              <div>
                                <div className="font-medium">{style.label}</div>
                                <div className="text-sm text-gray-500">{style.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Tipo de Voz</Label>
                        <Select value={voiceType} onValueChange={setVoiceType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {voiceOptions.map((voice) => (
                              <SelectItem key={voice.value} value={voice.value}>
                                {voice.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Música de Fundo</Label>
                        <Select value={musicStyle} onValueChange={setMusicStyle}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {musicOptions.map((music) => (
                              <SelectItem key={music.value} value={music.value}>
                                {music.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Personalização (Opcional)
                      </h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="creator-name">Nome do Criador</Label>
                        <Input
                          id="creator-name"
                          placeholder="Seu nome ou canal"
                          value={creatorName}
                          onChange={(e) => setCreatorName(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="affiliate-link">Link de Afiliado</Label>
                        <Input
                          id="affiliate-link"
                          placeholder="https://seu-link-de-afiliado.com"
                          value={affiliateLink}
                          onChange={(e) => setAffiliateLink(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="logo-upload">Logo Personalizado</Label>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="w-full">
                            <Upload className="w-4 h-4 mr-2" />
                            Enviar Logo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Preview e Configurações Avançadas */}
                <div className="space-y-6">
                  {/* Preview */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5 text-blue-600" />
                        Preview do Vídeo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                        {appInput && videoStyle ? (
                          <div className="text-center p-4">
                            <Video className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                            <p className="font-medium">{appInput}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Estilo: {videoStyles.find(s => s.value === videoStyle)?.label}
                            </p>
                          </div>
                        ) : (
                          <div className="text-center text-gray-500">
                            <Video className="w-12 h-12 mx-auto mb-3" />
                            <p>Preview aparecerá aqui</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Roteiro Personalizado */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Type className="w-5 h-5 text-green-600" />
                        Roteiro Personalizado
                      </CardTitle>
                      <CardDescription>
                        Deixe em branco para gerar automaticamente
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder="Digite seu roteiro personalizado aqui..."
                        value={customScript}
                        onChange={(e) => setCustomScript(e.target.value)}
                        rows={4}
                      />
                    </CardContent>
                  </Card>

                  {/* Botão de Gerar */}
                  <Card>
                    <CardContent className="pt-6">
                      {isGenerating ? (
                        <div className="space-y-4">
                          <div className="flex items-center justify-center gap-2">
                            <Sparkles className="w-5 h-5 animate-spin text-purple-600" />
                            <span className="font-medium">Gerando seu vídeo...</span>
                          </div>
                          <Progress value={progress} className="w-full" />
                          <p className="text-sm text-center text-gray-600">
                            {progress < 20 && "Analisando aplicativo..."}
                            {progress >= 20 && progress < 40 && "Gerando roteiro com IA..."}
                            {progress >= 40 && progress < 60 && "Criando narração..."}
                            {progress >= 60 && progress < 80 && "Adicionando efeitos visuais..."}
                            {progress >= 80 && "Finalizando vídeo..."}
                          </p>
                        </div>
                      ) : (
                        <Button
                          onClick={handleGenerate}
                          disabled={!appInput || !videoStyle}
                          className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                          size="lg"
                        >
                          <Wand2 className="w-5 h-5 mr-2" />
                          Gerar Vídeo com IA
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Aba Projetos */}
          <TabsContent value="projects" className="mt-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Meus Projetos</h2>
                <Badge variant="secondary">
                  {projects.length} vídeos criados
                </Badge>
              </div>

              {projects.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <FileVideo className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">Nenhum projeto ainda</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Crie seu primeiro vídeo promocional
                    </p>
                    <Button onClick={() => setActiveTab('create')}>
                      <Wand2 className="w-4 h-4 mr-2" />
                      Criar Primeiro Vídeo
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="aspect-[9/16] bg-gray-100 dark:bg-gray-800 relative">
                        {project.thumbnail ? (
                          <img
                            src={project.thumbnail}
                            alt={project.appName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Video className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="bg-black/50 text-white">
                            {project.duration}
                          </Badge>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="bg-black/50 backdrop-blur-sm rounded p-2">
                            <p className="text-white font-medium text-sm truncate">
                              {project.appName}
                            </p>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">
                            {videoStyles.find(s => s.value === project.style)?.label.split(' ')[1] || project.style}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {project.createdAt}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Play className="w-4 h-4 mr-1" />
                            Assistir
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* Aba Analytics */}
          <TabsContent value="analytics" className="mt-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Analytics</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Vídeos Criados</p>
                        <p className="text-2xl font-bold">{projects.length}</p>
                      </div>
                      <Video className="w-8 h-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Tempo Total</p>
                        <p className="text-2xl font-bold">{projects.length * 45}s</p>
                      </div>
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Estilo Favorito</p>
                        <p className="text-2xl font-bold">Anúncio</p>
                      </div>
                      <Star className="w-8 h-8 text-yellow-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Taxa de Sucesso</p>
                        <p className="text-2xl font-bold">100%</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Sugestões de Hashtags Populares</CardTitle>
                  <CardDescription>
                    Use essas hashtags para aumentar o alcance dos seus vídeos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      '#app', '#aplicativo', '#tecnologia', '#inovacao', '#digital',
                      '#produtividade', '#smartphone', '#android', '#ios', '#review',
                      '#dica', '#tutorial', '#novidade', '#lancamento', '#gratis'
                    ].map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-purple-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Dialog de Planos */}
      <Dialog open={showPricing} onOpenChange={setShowPricing}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Escolha seu Plano
            </DialogTitle>
            <DialogDescription className="text-center">
              Crie vídeos promocionais ilimitados com IA
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-purple-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.videos}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === 'Gratuito' ? 'Começar Grátis' : 'Assinar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog de Admin */}
      <Dialog open={showAdmin} onOpenChange={setShowAdmin}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Acesso Administrativo</DialogTitle>
            <DialogDescription>
              Digite a senha para acessar o painel administrativo
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-password">Senha</Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="Digite a senha"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleAdminLogin} className="flex-1">
                <Shield className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button variant="outline" onClick={() => setShowAdmin(false)}>
                Cancelar
              </Button>
            </div>
            
            <div className="text-xs text-gray-500 text-center">
              Dica: A senha é "admin123"
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Admin Badge Flutuante */}
      {isAdmin && (
        <div className="fixed bottom-4 right-4 z-50">
          <Badge className="bg-green-600 text-white px-3 py-2">
            <Crown className="w-4 h-4 mr-2" />
            Uso Ilimitado Ativo
          </Badge>
        </div>
      )}
    </div>
  )
}