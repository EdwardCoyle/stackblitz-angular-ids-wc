import { TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
describe('IconComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=icon.component.spec.js.map