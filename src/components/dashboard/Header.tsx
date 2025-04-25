// src/components/dashboard/Header.tsx
import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, X, Globe, Filter, Check, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavigate } from 'react-router-dom';
// import { logoutUser } from '@/features/auth/authslice';

interface HeaderProps {
  searchTerm: string;
  selectedLocation: string;
  selectedSkills: string[];
  availableSkills: string[];
  availableLocations: string[];
  onSearchChange: (term: string) => void;
  onLocationChange: (location: string) => void;
  onSkillToggle: (skill: string) => void;
  onClearFilters: () => void;
  onLogout: () => void;
  user: {
    name: string;
    avatar?: string;
  } | null; // Change this line to handle null user
}

const Header: FC<HeaderProps> = ({
  searchTerm,
  selectedLocation,
  selectedSkills,
  availableSkills,
  availableLocations,
  onSearchChange,
  onLocationChange,
  onSkillToggle,
  onClearFilters,
  onLogout,
  user,
}) => {
  const [locationSearch, setLocationSearch] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const filteredLocations = availableLocations.filter((loc) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  
  );

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="mx-auto max-w-screen-xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-3/4">
          {/* Search */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search jobs by title or company"
              className="pl-10"
            />
          </div>

          {/* Location Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full sm:w-48 justify-start">
                <Globe size={16} className="mr-2 text-gray-500" />
                {selectedLocation || 'All Locations'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-2 space-y-2">
              <Input
                placeholder="Search location..."
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                className="text-sm"
              />
              <div className="max-h-48 overflow-y-auto">
                {filteredLocations.map((loc) => (
                  <Button
                    key={loc}
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      onLocationChange(loc);
                    }}
                  >
                    {loc}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Skill Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full sm:w-48 justify-start">
                <Filter size={16} className="mr-2 text-gray-500" />
                {selectedSkills.length > 0
                  ? `${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} selected`
                  : 'All Skills'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2">
              <div className="flex flex-wrap gap-2">
                {availableSkills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <Button
                      key={skill}
                      onClick={() => onSkillToggle(skill)}
                      variant={isSelected ? 'default' : 'outline'}
                      size="sm"
                      className={`flex items-center gap-2 ${
                        isSelected ? 'bg-purple-600 text-white hover:bg-purple-700' : ''
                      }`}
                    >
                      {isSelected ? <Check size={14} /> : <div className="w-3 h-3 rounded-full border" />}
                      {skill}
                    </Button>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>

          {/* Search Button */}
          <Button variant="default" className="w-full sm:w-auto">
            <Search size={16} className="mr-1" />
            Search
          </Button>
        </div>

        {/* Avatar and Dropdown */}
        <Popover open={profileOpen} onOpenChange={setProfileOpen}>
          <PopoverTrigger asChild>
            <div className="cursor-pointer flex items-center gap-2">
              {user ? (
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user.avatar || '/placeholder-avatar.png'} alt={user.name} />
                  <AvatarFallback>{user.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                </Avatar>
              ) : (
                <Avatar className="h-9 w-9">
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>
              )}
              <ChevronDown size={16} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2 space-y-1">
            {user ? (
              <>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/profile')}>
                  User Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/plans')}>
                  Subscription Plan
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/settings')}>
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-500" onClick={onLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/login')}>
                Login
              </Button>
            )}
          </PopoverContent>
        </Popover>
      </div>

      {/* Clear skills button */}
      {selectedSkills.length > 0 && (
        <div className="px-4 pb-3 max-w-screen-xl mx-auto flex items-center">
          <Button
            onClick={onClearFilters}
            size="sm"
            variant="ghost"
            className="flex items-center text-sm text-red-500"
          >
            <X className="w-4 h-4 mr-1" />
            Clear Skill Filters
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
